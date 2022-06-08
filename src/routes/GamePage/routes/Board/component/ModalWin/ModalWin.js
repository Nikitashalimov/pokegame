import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import cn from 'classnames';
import s from './ModalWin.module.css';
import YouWin from '../../assets/you-win.png';
import YouLose from '../../assets/you-lose.png';
import Draw from '../../assets/draw.png';

const ModalWin = ({ type }) => {
    const history = useHistory();
    const [url, setUrl] = useState(null);

    const handleFinishClick = () => {
        history.push('/game/finish');
    }

    useEffect(() => {
        switch (type) {
            case 'win':
                setUrl(YouWin);
                break;
            case 'lose':
                setUrl(YouLose);
                break;
            case 'draw':
                setUrl(Draw);
                break;
            default:
                setUrl(YouWin);
        }
    }, [type]);

    return (
        <div className={cn(s.modal,
            {
                [s.active]: type
            }
        )}>
            <div className={s.result}>
                <img className={s.picture} src={url} alt="result" />
                <button
                    className={s.buttonFinish}
                    onClick={handleFinishClick}
                >
                    ОК
                </button>
            </div>
        </div >

    );
};

export default ModalWin;