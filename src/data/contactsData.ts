import emailImg from 'shared/img/contact_email.svg';
import telegramImg from 'shared/img/contact_telegram.svg';
import githubImg from 'shared/img/contact_github.svg';
// import headHunterImg from 'shared/img/contact_hh.png';
import vkImg from 'shared/img/contact_vk.svg';

export interface IMyContactList {
    [contactMethodName: string]: {
        text: string;
        imgSrc: string;
        linkPath: string;
        altText: string;
    };
}

export const myContactList: IMyContactList = {
    email: {
        text: 'You can write me an email',
        imgSrc: emailImg,
        linkPath: 'mailto:evtsyga@gmail.com',
        altText: 'Email',
    },
    telegram: {
        text: 'Or you can write me in Telegram',
        imgSrc: telegramImg,
        linkPath: 'tg://resolve?domain=timur_eit',
        altText: 'Telegram',
    },
    gitHub: {
        text: 'You can also visit my GitHub account',
        imgSrc: githubImg,
        linkPath: 'https://github.com/Timur-eit',
        altText: 'GitHub',
    },
    // headHunter: {
    //     text: 'And my HeadHunter account',
    //     imgSrc: headHunterImg,
    //     linkPath:
    //         'https://spb.hh.ru/resume/e9fad3c9ff08089fc00039ed1f6c3872725230',
    //     altText: 'HeadHunter',
    // },
    vk: {
        text: 'To know a bit more about me you can visit my VK page',
        imgSrc: vkImg,
        linkPath: 'https://vk.com/timur_eit',
        altText: 'VK',
    },
};
