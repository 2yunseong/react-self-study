import classNames from 'classnames/bind';
import styles from './CSSModule.module.css';

const c = classNames.bind(styles);

const CSSModule = () => {
    return <div className={c('wrapper')}>
        안녕하세요, 저는 <span className='something'>CSS Module</span> 입니다!
    </div>
}

export default CSSModule;