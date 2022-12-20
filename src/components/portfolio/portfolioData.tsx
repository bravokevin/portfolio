export interface PortfolioObject {
    id: string;
    title: string;
    description: string;
    modalTitle: string;
    link: string;
    icon: string;
}

const getListData = async (listId = '900800044691') => {
    const listItems = await fetch(
        `https://api.clickup.com/api/v2/list/${listId}/task?`,
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

const getTaskInfo = async (taskId: string): Promise<PortfolioObject> => {
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

export const getPortfolioContent = async () => {
    const listData = await getListData()
    const portfolioContent: PortfolioObject[] = []

    listData.forEach((d: PortfolioObject) => {

        getTaskInfo(d.id)
            .then(d => {
                portfolioContent.push(d)
                
            })
            return portfolioContent
    })
            console.log(portfolioContent)  

    return portfolioContent;
}
// const portfolioContent = [
//     {
//         id: 1,
//         icon: '-user-arrows',
//         title: "Crowdfy",
//         modalTitle: "A descentralize crowdfunding application.",
//         description: "Crowdfy Is a decentralized on-chain crowdfunding application deployed on polygon, avalanche and ethereum testnet networks… It allows any user with an account to create and fund campaigns on the protocol. Also, has capabilities to do yield farming with the funds collected and allow to found campaigns in any token whitelisted on the protocol.",
//         link: "https://docs.google.com/document/d/e/2PACX-1vTgnn6Qv1dxXVd8ybnTItJaa9tE30tKj3QvNHHJ7WOWyPk_sPoDLwPJ9-2pjA-7rvA-AcF_aFgSF9ok/pub"
//     },
//     {
//         id: 2,
//         icon: '-arrow',
//         title: "Starklend",
//         modalTitle: "A decentralized lending and borrowing protocol.",
//         description:
//             `It is a simple protocol that replicates the functionalities of the AAVE protocol but in the Starknet network.

//             It has functionalities to allow users to do flash loans with the money of the protocol.
            
//             Was written in the Cairo programming language and used the protostar development framework to develop it. 
//             `,
//         link: "https://docs.google.com/document/d/e/2PACX-1vS5HwhmVjsp55VEiocoWBpRzw7rYEmM7e7223R4Yd4ICWQC2yutFDHaiVUMKoB70RGaescnnP_ltuev/pub"

//     },
//     {
//         id: 3,
//         icon: '-link',
//         title: "ArepaChain",
//         modalTitle: "A PoS blockchain Protocol.",
//         description:
//             "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
//         link: "https://docs.google.com/document/d/e/2PACX-1vQbMhywD4aIJLChAAvp20Rbq5Jc_bj-YL28x-bsupug6U23lJu84nNoKfisRrcNpsBvxlkOkvWTLRkd/pub"

//     },
//     {
//         id: 4,
//         icon: '-edit',
//         title: "Projects done in my first job",
//         modalTitle: "The projects that I build in my first job as an intern.",
//         description:
//             "Arepa chain is a PoS blockchain that allows you to interact with it with a CLI interface. It works and has the same functionalities as every other basic blockchain.",
//         link: "https://docs.google.com/document/d/e/2PACX-1vTRJ-V0m763QGDiSly68zg0IuSWkL2cKwR_gHbxQEPdW0qI-4-OSmHHkJyoxPxzE2i9h__gdRGS2dma/pub"

//     },
//     {
//         id: 5,
//         icon: '-create-dashboard',
//         title: "Desxer",
//         modalTitle: "A Descentralize exchange aggregator.",
//         description:
//             "Lorem ipsum dolor sit amet consectetuer adipiscing eliaenean commodo ligula eget.",
//         link: "https://docs.google.com/document/d/e/2PACX-1vQVQlIIQMO1ZfGTdS4iKjGaA8XMXgeW8LeJqXs3TvyylABSG7Xk2LXVSzD2xwuL2ltXf-giMKyeEDH1/pub"
//     },
// ];
