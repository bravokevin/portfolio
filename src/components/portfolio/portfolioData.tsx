export interface PortfolioObject {
    id: string;
    title: string;
    description: string;
    modalTitle: string;
    link: string;
    icon: string;
}


export const getTaskInfo = async (taskId: string): Promise<PortfolioObject> => {

    const resp = await fetch(
        `https://verdant-cuchufli-2639de.netlify.app/.netlify/functions/server/tasks-api?taskId=${taskId}`,
        {
            method: 'GET'
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
        `https://verdant-cuchufli-2639de.netlify.app/.netlify/functions/server/list-api?listId=${listId}`,
        {
            method: 'GET'
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