import * as React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { ImgUrl } from '../constants';
import { useImage } from './../hooks/index';
import { useState } from 'react';


const Lab: React.FC = (props) => {
    let kalorimerBack = useImage(`${ImgUrl.FIRST}Kalorimer_zadnyaya_chast.png`);
    let kalorimerFront = useImage(`${ImgUrl.FIRST}Kalorimetr_perednyaya_chast.png`);
    let Lenta = useImage(`${ImgUrl.FIRST}Mernaya_lenta.png`);
    let LentaUsed = useImage(`${ImgUrl.FIRST}Mernaya_lenta_isp.png`);
    let MetallStakan = useImage(`${ImgUrl.FIRST}Metallicheskiy_stakan.png`);
    let Babble = useImage(`${ImgUrl.FIRST}Puzyrki.png`);
    let GlassStakan = useImage(`${ImgUrl.FIRST}Steklyanny_stakan.png`);
    let WaterCold = useImage(`${ImgUrl.FIRST}Kholodnaya_voda_vsyo.png`);
    let TemperaturaFirst = useImage(`${ImgUrl.FIRST}Temperatura1.png`);
    let TemperaturaSecond = useImage(`${ImgUrl.FIRST}Temperatura2.png`);
    let Termometr = useImage(`${ImgUrl.FIRST}Termometr.png`);
    let TermometrUsed = useImage(`${ImgUrl.FIRST}Terometr_isp.png`);
    let Trubka = useImage(`${ImgUrl.FIRST}Trubka.png`);
    let TrubkaUsed = useImage(`${ImgUrl.FIRST}Trubka_isp.png`);
    let TrubkaSkruch = useImage(`${ImgUrl.FIRST}Trubka_skruchennaya.png`);
    let WarmColdWater = useImage(`${ImgUrl.FIRST}Tyoplaya_kholodnaya_voda.png`);
    let WarmWater = useImage(`${ImgUrl.FIRST}Tyoplaya_voda_vsyo.png`);
    let ZajimOpen = useImage(`${ImgUrl.FIRST}Zazhim_otkryty_dlya_neskruchennoy.png`);
    let ZajimClosed = useImage(`${ImgUrl.FIRST}Zazhim_zakryty_dlya_neskruchennoy.png`);
    let ZVO = useImage(`${ImgUrl.FIRST}ZVO.png`);
    let ZVZ = useImage(`${ImgUrl.FIRST}ZVZ.png`);
    let background = useImage(`${ImgUrl.FIRST}Fon.png`);
    let WaterInCalorimer = useImage(`${ImgUrl.FIRST}Voda_v_kalorimetre.png`);
    let Water = useImage(`${ImgUrl.FIRST}Voda.png`);

    let [isTrubkaVisible, setTrubkaVisible] = useState(true);
    let [isTrubkaSkruchVisible, setTrubkaSkruchVisible] = useState(false);
    let [isLentaVisible, setLentaVisible] = useState(true);
    let [isTermometrVisible, setTermometrVisible] = useState(true);
    let [isWaterVisible, setWaterVisible] = useState(false);
    let [isBabbleVisible, setBabbleVisible] = useState(false);
    let [isTemperaturaVisible, setTemperanuraVisible] = useState(false);

    let [TrubkaY, setTrubkaY] = useState(417);
    let [LentaPos, setLentaPos,] = useState([391, 158]);
    let [TermometrY, setTermometrY] = useState(158);
    let [TermometrUsedY, setTermometrUsedY] = useState(262);
    let [KalorimerFrontY, setKalorimerFrontY] = useState(640);
    let [KalorimerBackY, setKalorimerBackY] = useState(645);
    let [MetallStakanPos, setMetallStakanPoss] = useState([465, 700]);
    let [GlassStakanPos, setGlassStakanPoss] = useState([465, 800]);
    let [timerFirst, setTimerFirst] = useState(null);
    let [timerSecond, setTimerSecond] = useState(null);
    let [KalorimerIsEmpty, setKalorimerEmpty] = useState(true);
    let [WaterTemperatura, setWaterTemperatura] = useState(null);
    let [isMetallStakanEmpty, setMetallStakanEmpty] = useState(false);
    let [isGlassStakanEmpty, setGlassStakanEmpty] = useState(false);
    let [TaskNumber, setTaskNumber] = useState(1);

    let [isZajimFirst, setZajimFirst] = useState(true);
    let [isZajimSecond, setZajimSecond] = useState(true);


    let TrubkaRef = React.useRef({} as any);
    let TrubkaUsedRef = React.useRef({} as any);
    let TrubkaSkruchRef = React.useRef({} as any);

    let LentaRef = React.useRef({} as any);
    let LentaUsedRef = React.useRef({} as any);

    let TermometrRef = React.useRef({} as any);
    let TermometrUsedRef = React.useRef({} as any);


    let KalorimerFrontRef = React.useRef({} as any);
    let KalorimerBackRef = React.useRef({} as any);

    let MetallStakanRef = React.useRef({} as any);
    let GlassStakanRef = React.useRef({} as any);
    let WarmWaterRef = React.useRef({} as any);
    let WaterColdRef = React.useRef({} as any);

    let ZajimOpenRef = React.useRef({} as any);
    let ZajimClosedRef = React.useRef({} as any);
    let ZajimOpenUpRef = React.useRef({} as any);
    let ZajimClosedUpRef = React.useRef({} as any);

    let imageFix = 0;
    let Interval = 1;
    let [ResetClick, setResetClick] = useState(false);


    const clearAllValues = () => {
        setResetClick(true);
        setTrubkaVisible(true);
        setTrubkaSkruchVisible(false);
        setLentaVisible(true);
        setTermometrVisible(true);
        setWaterVisible(false);
        setBabbleVisible(false);
        setTemperanuraVisible(false);
        setTrubkaY(417);
        setLentaPos([391, 158]);
        setTermometrY(158);
        setTermometrUsedY(262);
        setKalorimerFrontY(640);
        setKalorimerBackY(645);
        setTimerFirst(null);
        setTimerSecond(null);
        setKalorimerEmpty(true);
        setWaterTemperatura(null);
        setMetallStakanEmpty(false);
        setGlassStakanEmpty(false);
        setTaskNumber(1);
        setZajimFirst(true);
        setZajimSecond(true);
        clearInterval(timerSecond);
        clearTimeout(timerFirst);
        Interval = 1;

        // setMetallStakanPoss([465,700]);
        // //MetallStakanRef.current.attrs.y = 465;
        // //MetallStakanRef.current.attrs.x = 700;
        // console.log(WarmWaterRef);
        // WarmWaterRef.current.attrs.y = 465;
        // WarmWaterRef.current.attrs.x = 700;
        // setGlassStakanPoss([465,800]);
    }

    const WaterCheck = (e, TaskNum) => {

        let x = e.target.attrs.x;
        let y = e.target.attrs.y;
        if (x > 35 && x < 220 && y > 570 && y < 670) {
            if (TaskNum == 1) {
                setMetallStakanEmpty(true);
                setWaterTemperatura(true)
            } else {
                setGlassStakanEmpty(true);
                setWaterTemperatura(false)
            }
            setWaterVisible(true);
            {
                isZajimFirst && KalorimerIsEmpty
                    ? TimerBabble()
                    : null
            }
        }
    }

    const ZajimCheck = () => {
        {
            isWaterVisible && !isZajimFirst && KalorimerIsEmpty
                ? TimerBabble()
                : null
        }
    }

    const TimerBabble = () => {
        console.log('start timer')
        setBabbleVisible(true)
        setTimerFirst(setTimeout(() => {
            setBabbleVisible(false);
            setKalorimerEmpty(false);
        }, 3000))
        clearTimeout(timerFirst);
    }

    const onTermometrUsedCkick = () => {
        setTermometrUsedY(TermometrUsedRef.current.attrs.y + 1)
        setTemperanuraVisible(false);
        console.log(isTemperaturaVisible)
        if (isWaterVisible) {
            clearInterval(timerSecond);
            setTimerSecond(setInterval(changePosititonDown.bind(this), 10));
        }
    }

    const changePosititonDown = () => {

        if (TermometrUsedRef.current.attrs.y === 260) {
            setTemperanuraVisible(true);
            return;
        }
        if (TermometrUsedRef.current.attrs.y === 380) {
            Interval = -0.5;
        }
        setTermometrUsedY(TermometrUsedRef.current.attrs.y + Interval);
    }

    const onClickKalorimer = () => {
        if (isWaterVisible && TaskNumber != 3) {
            if (confirm('Вылить воду из Калоримера?')) {
                if (!isZajimFirst) {
                    if (WaterTemperatura) {
                        setTaskNumber(2);
                    }
                    else { setTaskNumber(3); }
                    setWaterVisible(false);
                    setTemperanuraVisible(false);
                    clearInterval(timerSecond);
                } else alert('Закройте верхний зажим')
            }

        } else {
            setTrubkaSkruchVisible(false);
            setTermometrVisible(true);
        }
    }

    return (
        <React.Fragment>
            <Stage width={900 + imageFix} height={900 + imageFix}>
                <Layer>
                    <Image width={900 + imageFix} height={900 + imageFix} image={background} />
                    {isTrubkaVisible
                        ? <Image ref={TrubkaRef} image={Trubka} y={TrubkaY + imageFix} width={150} height={30} x={217 + imageFix} onClick={(e) => setTrubkaVisible(false)} />
                        : null}
                    {isTermometrVisible
                        ? <Image ref={TermometrRef} image={Termometr} y={TermometrY + imageFix} width={80} height={16} x={15 + imageFix} onClick={(e) => setTermometrVisible(false)} />
                        : null}
                    <Image ref={KalorimerBackRef} image={kalorimerBack} y={KalorimerBackY + imageFix} width={250} height={100} x={40 + imageFix} />
                    {isTrubkaSkruchVisible
                        ? <Image ref={TrubkaSkruchRef} image={TrubkaSkruch} y={700 + imageFix} width={190} height={150} x={65 + imageFix} />
                        : null}
                    {isWaterVisible
                        ? <Image image={WaterInCalorimer} y={683 + imageFix} width={183} height={200} x={75 + imageFix} />
                        : null}
                    {isBabbleVisible
                        ? <Image image={Babble} y={690 + imageFix} width={15} height={15} x={210 + imageFix} />
                        : null}
                    <Image ref={KalorimerFrontRef} image={kalorimerFront} y={KalorimerFrontY + imageFix} width={250} height={250} x={40 + imageFix} onClick={(e) => onClickKalorimer()} />
                    {isTrubkaSkruchVisible
                        ? isZajimFirst
                            ? <Image ref={ZajimOpenUpRef} image={ZVO} y={693 + imageFix} width={15} height={25} x={237 + imageFix} onClick={(e) => { setZajimFirst(!isZajimFirst); ZajimCheck() }} />
                            : <Image ref={ZajimClosedUpRef} image={ZVZ} y={708 + imageFix} width={25} height={20} x={238 + imageFix} onClick={(e) => { setZajimFirst(!isZajimFirst); ZajimCheck() }} />
                        : null}


                    {isMetallStakanEmpty
                        ? <Image ref={MetallStakanRef} image={MetallStakan} y={MetallStakanPos[0] + imageFix} width={80} height={100} x={MetallStakanPos[1] + imageFix} onDragMove={(e) => console.log(e)} draggable={true} />
                        : <Image ref={WarmWaterRef} image={WarmWater} y={MetallStakanPos[0] + imageFix} width={80} height={100} x={MetallStakanPos[1] + imageFix} onMouseUp={(e) => { WaterCheck(e, 1) }} onDragMove={(e) => console.log(e)} draggable={isTrubkaSkruchVisible ? true : false} />}
                    {isGlassStakanEmpty
                        ? <Image ref={GlassStakanRef} image={GlassStakan} y={GlassStakanPos[0] + imageFix} width={80} height={100} x={GlassStakanPos[1] + imageFix} onDragMove={(e) => console.log(e)} draggable={TaskNumber == 2 ? true : false} />
                        : <Image ref={WaterColdRef} image={WaterCold} y={GlassStakanPos[0] + imageFix} width={80} height={100} x={GlassStakanPos[1] + imageFix} onMouseUp={(e) => { WaterCheck(e, 2) }} onDragMove={(e) => console.log(e)} draggable={TaskNumber == 2 ? true : false} />}

                    {!isTrubkaVisible && !isTrubkaSkruchVisible
                        ? <Image ref={TrubkaUsedRef} image={TrubkaUsed} y={570 + imageFix} width={620} height={7} x={50 + imageFix}
                            onClick={(e) => confirm('Поместить в калориметр?')
                                ? !isZajimSecond
                                    ? setTrubkaSkruchVisible(!isTrubkaSkruchVisible)
                                    : alert('Закройте задний зажим')
                                : null} />
                        : null}
                    {!KalorimerIsEmpty && !isTrubkaSkruchVisible && TaskNumber == 3
                        ? <Image image={Water} y={570 + imageFix} width={50} height={6} x={76 + imageFix} />
                        : null}
                    {!isTrubkaVisible && !isTrubkaSkruchVisible
                        ? isZajimFirst
                            ? <Image ref={ZajimOpenRef} image={ZajimOpen} y={557 + imageFix} width={20} height={13} x={55 + imageFix} onClick={(e) => { TaskNumber == 3 ? null : setZajimFirst(!isZajimFirst) }} />
                            : <Image ref={ZajimClosedRef} image={ZajimClosed} y={557 + imageFix} width={20} height={13} x={65 + imageFix} onClick={(e) => { TaskNumber == 3 ? null : setZajimFirst(!isZajimFirst) }} />

                        : null}
                    {!isTrubkaVisible && !isTrubkaSkruchVisible
                        ? isZajimSecond
                            ? <Image ref={ZajimOpenRef} image={ZajimOpen} y={557 + imageFix} width={20} height={13} x={630 + imageFix} onClick={(e) => { TaskNumber == 3 ? null : setZajimSecond(!isZajimSecond) }} />
                            : <Image ref={ZajimClosedRef} image={ZajimClosed} y={557 + imageFix} width={20} height={13} x={640 + imageFix} onClick={(e) => { TaskNumber == 3 ? null : setZajimSecond(!isZajimSecond) }} />
                        : null}

                    {isLentaVisible
                        ? <Image ref={LentaRef} image={Lenta} y={LentaPos[0] + imageFix} width={55} height={46} x={LentaPos[1] + imageFix} onClick={(e) => setLentaVisible(false)} />
                        : <Image ref={LentaUsedRef} image={LentaUsed} y={550 + imageFix} width={904} height={130} x={25 + imageFix}
                            onClick={(e) => { setLentaPos([391, 158]); setLentaVisible(true) }} onDragMove={(e) => console.log(e)} draggable={true} />}
                    {!isTermometrVisible
                        ? <Image ref={TermometrUsedRef} image={TermometrUsed} y={TermometrUsedY + imageFix} width={60} height={350} x={143 + imageFix} onClick={(e) => onTermometrUsedCkick()} />
                        : null}
                    {isTemperaturaVisible && isWaterVisible
                        ? WaterTemperatura
                            ? <Image image={TemperaturaFirst} y={377 + imageFix} width={15} height={30} x={164 + imageFix} onDragMove={(e) => console.log(e)} draggable={true} />
                            : <Image image={TemperaturaSecond} y={377 + imageFix} width={15} height={30} x={164 + imageFix} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                </Layer>
            </Stage>
            <input type='button' value='Restart' onClick={(e) => clearAllValues()} />
        </React.Fragment>
    )
}

export default Lab;