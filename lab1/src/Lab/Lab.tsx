import * as React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { ImgUrl } from '../constants';
import { useImage } from './../hooks/index';
import { useState } from 'react';

const Lab: React.FC = (props) => {
    let probirka = useImage(`${ImgUrl.FIRST}Probirka_kopia_4.png`);
    let background = useImage(`${ImgUrl.FIRST}Phon.png`);
    let lineage = useImage(`${ImgUrl.FIRST}Lineyka_1.png`);
    let ustanovka = useImage(`${ImgUrl.FIRST}Ustanovka_14.png`);
    let kreplenie = useImage(`${ImgUrl.FIRST}Kreplenie_2.png`);
    let probirkaSecond = useImage(`${ImgUrl.FIRST}Probirka_5.png`);
    let menzurka = useImage(`${ImgUrl.FIRST}Menzurka_9.png`);
    let voda = useImage(`${ImgUrl.FIRST}Voda_v_menzurke_8.png`);
    let vodaSecond = useImage(`${ImgUrl.FIRST}Kaplya_v_probirke.png`);
    let delenia = useImage(`${ImgUrl.FIRST}Tsena_delenia_3.png`);
    let barometr = useImage(`${ImgUrl.FIRST}Barometr.png`);
    let center = useImage(`${ImgUrl.FIRST}Tsentr_10.png`);
    let arrowFirst = useImage(`${ImgUrl.FIRST}Strelka1_11.png`);
    let arrowSecond = useImage(`${ImgUrl.FIRST}Strelka2_12.png`);

    let [isProbirkaVisible, setProbirkaVisible] = useState(true);

    let [rotation, setRotation] = useState(0);
    let [kreplenieY, setKreplenieY] = useState(295); //295
    let [probirkaSecondY, setProbirkaSecondY] = useState(235); //235
    let [timer, setTimer] = useState(null);
    let [vodaHeight, setVodaHeight] = useState(150);
    let [vodaY, setVodaY] = useState(651);
    let [vodaSecondY, setVodaSecondY] = useState(683);
    let [vodaSecondHeight, setVodaSecondHeight] = useState(1);
    let [arrowFirstX, setArrowFirstX] = useState(734);
    let [arrowFirstY, setArrowFirstY] = useState(559);
    let [arrowSecondX, setArrowSecondX] = useState(709);
    let [arrowSecondY, setArrowSecondY] = useState(556);

    let kreplenieRef = React.useRef({} as any);
    let probirkaSecondRef = React.useRef({} as any);
    let vodaSecondRef = React.useRef({} as any);
    let vodaRef = React.useRef({} as any);
    let arrowFirstRef = React.useRef({} as any);
    let arrowSecondRef = React.useRef({} as any);
    let lineageRef = React.useRef({} as any);

    let imageFix = 0;

    const lineageClickHandler = (e) => {
        setRotation(-90);
    }

    const clearAllValues = () => {
        clearInterval(timer);
        lineageRef.current.attrs.x = 450;
        lineageRef.current.attrs.y = 784;
        setRotation(0);
        setKreplenieY(295);
        setProbirkaSecondY(235);
        setVodaHeight(150);
        setVodaY(651);
        setProbirkaVisible(true);
        setVodaSecondY(683);
        setVodaSecondHeight(1);
        setArrowFirstX(734);
        setArrowFirstY(559);
        setArrowSecondX(709);
        setArrowSecondY(556);
    }


    const onKreplenieClick = () => {
        if (!isProbirkaVisible) {
            clearInterval(timer);
            setTimer(setInterval(changePosition.bind(this), 10));
        }
    }

    const changePosition = () => {
        if (probirkaSecondRef.current.attrs.y === 503) {
            setArrowFirstX(arrowFirstRef.current.attrs.x === 734 ? 733 : 734);
            setArrowFirstY(arrowFirstRef.current.attrs.y === 559 ? 560 : 559);
            setArrowSecondX(arrowSecondRef.current.attrs.x === 709 ? 707 : 709);
            setArrowSecondY(arrowSecondRef.current.attrs.y === 556 ? 557 : 556);
            return;
        }
        setKreplenieY(kreplenieRef.current.attrs.y + 1);
        setProbirkaSecondY(probirkaSecondRef.current.attrs.y + 1);
        if (probirkaSecondRef.current.attrs.y >= 493) {
            setArrowFirstX(arrowFirstRef.current.attrs.x === 734 ? 733 : 734);
            setArrowFirstY(arrowFirstRef.current.attrs.y === 559 ? 560 : 559);
            setArrowSecondX(arrowSecondRef.current.attrs.x === 709 ? 707 : 709);
            setArrowSecondY(arrowSecondRef.current.attrs.y === 556 ? 557 : 556);
            setVodaHeight(vodaRef.current.attrs.height + 1);
            setVodaY(vodaRef.current.attrs.y - 1);
        }
        if (probirkaSecondRef.current.attrs.y >= 427) {
            setVodaSecondY(vodaSecondRef.current.attrs.y + 1);
            if (vodaSecondRef.current.attrs.height !== 40) {
                setVodaSecondHeight(vodaSecondRef.current.attrs.height + 1);
            }
        }
    }

    return (
        <React.Fragment>
            <Stage width={900 + imageFix} height={900 + imageFix}>
                <Layer>
                    <Image width={900 + imageFix} height={900 + imageFix} image={background} />
                    <Image image={ustanovka} x={22 + imageFix} y={224 + imageFix} width={400} height={600} draggable={true} onDragMove={(e) => console.log(e)} />
                    <Image image={menzurka} x={197 + imageFix} y={603 + imageFix} width={125} height={200} onDragMove={(e) => console.log(e)} draggable={true} />
                    {isProbirkaVisible
                        ? <Image x={201 + imageFix} y={420 + imageFix} image={probirka} width={150} height={25} onClick={(e) => setProbirkaVisible(false)} />
                        : null}
                    <Image ref={vodaRef} image={voda} x={204} y={vodaY} width={110} height={vodaHeight} onDragMove={(e) => console.log(e)} draggable={true} />
                    <Image ref={vodaSecondRef} image={vodaSecond} x={250} y={vodaSecondY} width={20} height={vodaSecondHeight} />
                    {!isProbirkaVisible
                        ? <Image ref={probirkaSecondRef} x={244 + imageFix} y={probirkaSecondY + imageFix} width={30} height={300} image={probirkaSecond} onDragMove={(e) => console.log(e)} draggable={true} />
                        : (null)}
                    <Image ref={kreplenieRef} image={kreplenie} y={kreplenieY + imageFix} width={260} height={45} x={38 + imageFix} onClick={onKreplenieClick} />
                    <Image image={delenia} x={215} y={650} width={60} height={140} onDragMove={(e) => console.log(e)} draggable={true} />
                    <Image image={barometr} x={584} y={500} width={300} height={300} />
                    <Image ref={arrowFirstRef} image={arrowFirst} x={arrowFirstX} y={arrowFirstY} width={40} height={100} onDragMove={(e) => console.log(e)} draggable={true} />
                    <Image ref={arrowSecondRef} image={arrowSecond} x={arrowSecondX} y={arrowSecondY} width={50} height={150} onDragMove={(e) => console.log(e)} draggable={true} />
                    <Image image={center} x={715} y={633} width={40} height={40} onDragMove={(e) => console.log(e)} draggable={true} />
                    <Image ref={lineageRef} image={lineage} x={450 + imageFix} y={784 + imageFix} width={440} height={60} rotation={rotation} onClick={lineageClickHandler} draggable={rotation !== 0} />
                </Layer>
            </Stage>
            <input type='button' value='Restart' onClick={clearAllValues}/>
        </React.Fragment>
    )
}

export default Lab;