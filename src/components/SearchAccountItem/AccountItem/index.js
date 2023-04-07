import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/325608105_1148845239116999_3045381348987310331_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UXsDwjfpL2QAX8Hyw6C&_nc_ht=scontent.fsgn13-2.fna&oh=00_AfDd_1E5q8Ap3e3uYpcGczSwrdDaQO34VyjGZbmWD6zVNQ&oe=642936B6"
                alt="Ảnh đại diện"
                className={cx('avatar')}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                </h4>
                <span className={cx('username')}>anhdung5c1</span>
            </div>
        </div>
    );
}

export default AccountItem;
