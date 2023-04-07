import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faSignIn,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: 'English',
        icon: <FontAwesomeIcon icon={faLanguage} />,
        children: {
            data: [
                { code: 'en', title: 'English' },
                { code: 'vi', title: 'Tiếng việt' },
            ],
        },
    },
    {
        title: 'Feedback and help',
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        to: '/feedback',
    },
    {
        title: 'Keyboard shotcuts',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    const currentUser = true;

    const userMenu = [
        {
            title: 'View profile',
            icon: <FontAwesomeIcon icon={faUser} />,
            to: '/@dung',
        },
        {
            title: 'Get coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/coin',
        },
        {
            title: 'Setting',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            title: 'Log out',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            to: '/logout',
            sparated: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* Search */}
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div className={cx('actions-icon')}>
                            <Button
                                href="/upload"
                                className={cx('upload-btn')}
                                leftIcon={<UploadIcon width="2rem" height="2rem" />}
                            >
                                <span>Upload</span>
                            </Button>
                            <Tippy offset={[12, 8]} content="Message" delay={[0, 200]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon className={cx('message-btn')} />
                                </button>
                            </Tippy>
                            <Tippy offset={[12, 8]} content="Inbox" delay={[0, 200]} placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="3.2rem" height="3.2rem" className={cx('inbox-btn')} />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Login
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="fafasf"
                                className={cx('user-avatar')}
                                alt="Thao Nhi"
                                fallback="https://yt3.ggpht.com/yti/AHXOFjVmqpByMabNep_gYIkGsOvJedmvpXGT41dtRoQ3=s88-c-k-c0x00ffffff-no-rj-mo"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
