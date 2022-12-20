export interface PortfolioObject {
    id: string;
    title: string;
    description: string;
    modalTitle: string;
    link: string;
    icon: string;
}


export const getTaskInfo = async (taskId: string): Promise<PortfolioObject> => {
    const query = new URLSearchParams({
        include_subtasks: 'true'
    }).toString();

    const resp = await fetch(
        `https://api.clickup.com/api/v2/task/${taskId}?${query}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'pk_18924001_9XP63KU5MKGK40VZ09YHDJABAZAW1THD'
            }
        }
    );
    const data = await resp.json();
    const obj = {
        id: data.id,
        title: data.name,
        description: data.description,
        modalTitle: data.subtasks[0].name,
        link: data.subtasks[1].name,
        icon: data.subtasks[2].name,
    }
    return obj
}


export const getListData = async (listId = '900800044691') => {
    const query = new URLSearchParams({
        reverse: 'true',

      }).toString();
    const listItems = await fetch(
        `https://api.clickup.com/api/v2/list/${listId}/task?${query}`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'pk_18924001_9XP63KU5MKGK40VZ09YHDJABAZAW1THD'
            }
        }
    );
    const listData = await listItems.json();
    return listData.tasks
}

export const getPortfolioContent = async () => {
    const listData = await getListData()
    const data = [];
    for( let i in listData){
        const d = await getTaskInfo(listData[i].id)
        data.push(d)
    }
    return data
}