import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faSignIn,
    faCloudUpload,
    faUser,
    faGear,
    faCoins,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PoperWrapper } from '~/components/Poper';
import AccountItem from '~/components/SearchAccountItem/AccountItem';

import Button from '~/components/Button';
import Menu from '~/components/Poper/Menu';

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
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 2000);
    }, []);
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
            to: '/log out',
            sparated: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <TippyHeadless
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PoperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PoperWrapper>
                        </div>
                    )}
                    visible={searchResult.length > 0}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search account and video" />
                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <Tippy offset={[12, 8]} content="Upload video" delay={[0, 200]} placement="bottom">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>
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
                            <img
                                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UXsDwjfpL2QAX8Hyw6C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDd_1E5q8Ap3e3uYpcGczSwrdDaQO34VyjGZbmWD6zVNQ&oe=642936B6"
                                className={cx('user-avatar')}
                                alt="Thao Nhi"
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
