import * as React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { ImgUrl } from '../constants';
import { useImage } from './../hooks/index';
import { useState } from 'react';
import Konva from 'konva';


const Lab: React.FC = (props) => {
    //let kalorimerBack = useImage(`${ImgUrl.FIRST}Kalorimer_zadnyaya_chast.png`)
    let background = useImage(`${ImgUrl.FIRST}Osnova.png`),
        BintNaPolke = useImage(`${ImgUrl.FIRST}Bint_na_polke.png`),
        BintNaPolkeAfter = useImage(`${ImgUrl.FIRST}Bint_na_polke_2.png`),
        BintNaUsed = useImage(`${ImgUrl.FIRST}Bint_ispolzovanie.png`),
        Pipetka = useImage(`${ImgUrl.FIRST}Pipetka_na_polke.png`),
        PipetkaUsed = useImage(`${ImgUrl.FIRST}Pipetka.png`),
        Kaplya = useImage(`${ImgUrl.FIRST}Kaplya.png`),
        KapPokazaniyaVlagSuh = useImage(`${ImgUrl.FIRST}Pokazanie_sukh.png`),
        PokazaniyaVlag = useImage(`${ImgUrl.FIRST}Pokazanie_vlag.png`),
        PipetkaUsedSVodoy = useImage(`${ImgUrl.FIRST}Pipetka_s_vodoy.png`);

    let [isBintNaPolkeUsed, setSBintNaPolkeUsed] = useState(false),
        [isPipetkaUsed, setPipetkaUsed] = useState(false),
        [isKaplyaVisible, setKaplyaVisible] = useState(false),
        [isPipetkaUsedWater, setPipetkaUsedWater] = useState(false),
        [isTemperaturaDown, setTemperaturaDown] = useState(false);

    let [KaplyaPosX, setKaplyaPosX] = useState(1),
        [KaplyaPosY, setKaplyaPosY] = useState(1);
    // let [isProvodaVisible, setProvodaVisible] = useState(true),

    let KaplyaRef = React.useRef({} as any);
    //let secondWordRef = React.useRef({} as any);  
    let [timerSecond, setTimerSecond] = useState(null),
        [timerOut, setTimerOut] = useState(null);

    // <Image ref={PolzunokRef} rotation={300} image={Polzunok} width={50 + imageFix} height={70 + imageFix} y={596 + imageFix} x={233 + imageFix}   />


    const clearAllValues = () => {
        setSBintNaPolkeUsed(false);
        setPipetkaUsed(false);
        setKaplyaVisible(false);
        setPipetkaUsedWater(false);
        setTemperaturaDown(false);
        clearTimeout(timerOut);
        clearInterval(timerSecond);
    }

    const captureWater = (pos) => {
        let x = pos.target.attrs.x,
            y = pos.target.attrs.y;
        if (x >= 128 && x <= 256 && y >= 331 && y <= 348) {
            setPipetkaUsedWater(true)
        }
        console.log(pos)
    }

    const dropWater = (pos) => {
        let x = pos.target.attrs.x,
            y = pos.target.attrs.y;
        if (x >= 590 && x <= 615 && isBintNaPolkeUsed) {
            setPipetkaUsedWater(false)
            setKaplyaVisible(true);
            KaplyaRef.current.attrs.x = x;
            KaplyaRef.current.attrs.y = y + 330;
            clearInterval(timerSecond);
            setTimerSecond(setInterval(changePosititonDown.bind(this), 10));

        }
    }


    const changePosititonDown = () => {
        if (KaplyaRef.current.attrs.y >= 690) {
            changeTemperature();
            return;
        }
        setKaplyaPosY(KaplyaRef.current.attrs.y + 4.5);
    }

    const changeTemperature = () => {
        setKaplyaVisible(false);
        clearInterval(timerSecond);
        setTimerOut(setTimeout(() => {
            setPipetkaUsed(false);
            setTemperaturaDown(true);
        }, 5000));
    }

    return (
        <React.Fragment>
            <Stage width={900} height={900}>
                <Layer>
                    <Image width={900} height={900} image={background} />
                    {!isTemperaturaDown
                        ? <Image width={15} height={415} x={605} y={338} image={KapPokazaniyaVlagSuh} onDragMove={(e) => console.log(e)} draggable={true} />
                        : <Image width={15} height={395} x={605} y={358} image={KapPokazaniyaVlagSuh} onDragMove={(e) => console.log(e)} draggable={true} />}
                    {!isBintNaPolkeUsed
                        ? <Image width={90} height={55} x={266} y={389} image={BintNaPolke} onClick={(e) => setSBintNaPolkeUsed(true)} onDragMove={(e) => console.log(e)} draggable={false} />
                        : <Image width={72} height={41} x={266} y={389} image={BintNaPolkeAfter} onDragMove={(e) => console.log(e)} draggable={false} />}
                    {isBintNaPolkeUsed
                        ? <Image width={25} height={60} x={600} y={695} image={BintNaUsed} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {!isPipetkaUsed
                        ? <Image width={80} height={20} x={170} y={423} image={Pipetka} onClick={(e) => setPipetkaUsed(true)} onDragMove={(e) => console.log(e)} draggable={false} />
                        : <Image width={200} height={330} x={196} y={256} image={isPipetkaUsedWater ? PipetkaUsedSVodoy : PipetkaUsed} onMouseUp={(e) => isPipetkaUsedWater ? dropWater(e) : captureWater(e)} onDragMove={(e) => console.log(e)} draggable={true} />}
                    {isKaplyaVisible
                        ? <Image ref={KaplyaRef} width={25} height={40} x={KaplyaPosX} y={KaplyaPosY} image={Kaplya} onClick={(e) => setPipetkaUsed(true)} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                </Layer>
            </Stage>
            <input type='button' value='Restart' onClick={(e) => clearAllValues()} />
        </React.Fragment>
    )
}

export default Lab;