import * as React from 'react';
import { Stage, Layer, Rect, Text, Image } from 'react-konva';
import { ImgUrl } from '../constants';
import { useImage } from './../hooks/index';
import { useState } from 'react';
import Konva from 'konva';


const Lab: React.FC = (props) => {
    //let kalorimerBack = useImage(`${ImgUrl.FIRST}Kalorimer_zadnyaya_chast.png`)
    let background = useImage(`${ImgUrl.FIRST}Osnova.png`),
        Provoda = useImage(`${ImgUrl.FIRST}Soedinitelnye_provoda.png`),
        InstallLink = useImage(`${ImgUrl.FIRST}Ustanovka_soedineniy.png`),
        AmpermetrMinus = useImage(`${ImgUrl.FIRST}Ampermetr.png`),
        VoltMetrPlus = useImage(`${ImgUrl.FIRST}Voltmetr (1).png`),
        Reostat = useImage(`${ImgUrl.FIRST}Reostat.png`),
        Key = useImage(`${ImgUrl.FIRST}Klyuch.png`),
        KeyOn = useImage(`${ImgUrl.FIRST}Klyuch_vkl.png`),
        KeyOf = useImage(`${ImgUrl.FIRST}Klyuch_vykl.png`),
        VoltMetrMinus = useImage(`${ImgUrl.FIRST}Voltmetr.png`),
        BataryPlus = useImage(`${ImgUrl.FIRST}Batareyka.png`),
        LinkReostatAmpermetrMinus = useImage(`${ImgUrl.FIRST}Reostat-ampermetr.png`),
        LinkKeyReostat = useImage(`${ImgUrl.FIRST}Klyuch-reostat.png`),
        LinkBataryPlusVoltmetrPlus = useImage(`${ImgUrl.FIRST}Batareyka_-voltmetr.png`),
        LinkBataryMinusVoltmetrMinus = useImage(`${ImgUrl.FIRST}Batareyka--voltmetr.png`),
        LinkAmpermetrPlusBataryPlus = useImage(`${ImgUrl.FIRST}Batareyka_-ampermetr.png`),
        LinkBataryMinusKey = useImage(`${ImgUrl.FIRST}Batareyka--klyuch.png`),
        Strelka = useImage(`${ImgUrl.FIRST}Strelka.png`),
        Polzunok = useImage(`${ImgUrl.FIRST}Polzunok.png`);

    let [secondLinkIsLinked, setSecondLink] = useState(false),
        [thirdLinkIsLinked, setThirdLink] = useState(false),
        [fourthLinkIsLinked, setFourthLink] = useState(false),
        [fifthLinkIsLinked, setFifthLink] = useState(false),
        [sixthLinkIsLinked, setSixthLink] = useState(false),
        [isDraggableSecond, setDraggebleSecond] = useState(true);
    //  IS LinkBataryMinusBataryPlus = useImage(`${ImgUrl.FIRST}Reostat-ampermetr.png`);

    // let [isTrubkaVisible, setTrubkaVisible] = useState(true);

    //let TrubkaRef = React.useRef({} as any);
    let [isProvodaVisible, setProvodaVisible] = useState(true),
        [isKeyOn, setKeyOn] = useState(false);

    let secondWordRef = React.useRef({} as any),
        PolzunokRef = React.useRef({} as any),
        StrelkaAmperRef = React.useRef({} as any),
        StrelkaVoltRef = React.useRef({} as any);

    let imageFix = 0,
        checkPos = [
            [406, 684, 172, 194],
            [406, 684, 216, 232],
            [406, 684, 258, 270],
            [406, 684, 292, 308],
            [406, 684, 330, 346]],
        [polzunokState, setPolzunokState] = useState(1);

    // <Image ref={PolzunokRef} rotation={300} image={Polzunok} width={50 + imageFix} height={70 + imageFix} y={596 + imageFix} x={233 + imageFix}  onDragMove={(e) => console.log(e) } draggable={true} />


    const clearAllValues = () => {
        setProvodaVisible(true);
        setPolzunokState(1);
        setSecondLink(false);
        setThirdLink(false);
        setFourthLink(false);
        setFifthLink(false);
        setSixthLink(false);
        setDraggebleSecond(true);
        setKeyOn(false);
    }

    const LinkOn = (e, x1, x2, y1, y2) => {
        let x = e.target.attrs.x,
            y = e.target.attrs.y;
        if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
            return true;
        } else {
            return false;
        }
    }

    const VerticalDragg = (pos) => {
        return {
            x: pos.x,
            y: pos.y
        }
    }

    const allLinkCheck = () => {
        if (secondLinkIsLinked && thirdLinkIsLinked && fourthLinkIsLinked && fifthLinkIsLinked && sixthLinkIsLinked) {
            return true
        }
        else return false

    }

    //rotation  offset offsetX offsetY

    return (
        <React.Fragment>
            <Stage width={900 + imageFix} height={900 + imageFix}>
                <Layer>
                    <Image width={900 + imageFix} height={900 + imageFix} image={background} />
                    {isKeyOn
                        ? allLinkCheck()
                            ? polzunokState == 1
                                ? <Image rotation={-139} ref={StrelkaAmperRef} image={Strelka} width={70} height={9} x={117} y={757} draggable={false} onDragMove={(e) => console.log(e)} />
                                : <Image rotation={-180} ref={StrelkaAmperRef} image={Strelka} width={70} height={9} x={117} y={757} draggable={false} onDragMove={(e) => console.log(e)} />
                            : <Image rotation={-180} ref={StrelkaAmperRef} image={Strelka} width={70} height={9} x={117} y={757} draggable={false} onDragMove={(e) => console.log(e)} />
                        : <Image rotation={-180} ref={StrelkaAmperRef} image={Strelka} width={70} height={9} x={117} y={757} draggable={false} onDragMove={(e) => console.log(e)} />
                    }
                    {isKeyOn
                        ? allLinkCheck()
                            ? polzunokState == 1
                                ? <Image rotation={-149} ref={StrelkaVoltRef} image={Strelka} width={70} height={9} x={366} y={714} draggable={true} onDragMove={(e) => console.log(e)} />
                                : <Image rotation={-128} ref={StrelkaVoltRef} image={Strelka} width={70} height={9} x={366} y={714} draggable={true} onDragMove={(e) => console.log(e)} />
                            : <Image rotation={-180} ref={StrelkaVoltRef} image={Strelka} width={70} height={9} x={366} y={714} draggable={true} onDragMove={(e) => console.log(e)} />
                        : <Image rotation={-180} ref={StrelkaVoltRef} image={Strelka} width={70} height={9} x={366} y={714} draggable={true} onDragMove={(e) => console.log(e)} />
                    }
                    {isProvodaVisible
                        ? <Image image={Provoda} width={120 + imageFix} height={38 + imageFix} y={149 + imageFix} x={25 + imageFix} onClick={(e) => setProvodaVisible(false)} />
                        : <Image image={InstallLink} width={700 + imageFix} height={350 + imageFix} y={70 + imageFix} x={100 + imageFix} />}
                    {!isProvodaVisible
                        ? <Image image={AmpermetrMinus} width={180 + imageFix} height={30 + imageFix} y={152 + imageFix} x={525 + imageFix} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {!isProvodaVisible
                        ? <Image ref={secondWordRef} image={Reostat} width={103 + imageFix} height={23 + imageFix} y={367 + imageFix} x={614 + imageFix} onMouseUp={(e) => { setSecondLink(LinkOn(e, checkPos[0][0], checkPos[0][1], checkPos[0][2], checkPos[0][3])); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {!isProvodaVisible
                        ? <Image image={VoltMetrPlus} width={180 + imageFix} height={30 + imageFix} y={393 + imageFix} x={301 + imageFix} onMouseUp={(e) => { setThirdLink(LinkOn(e, checkPos[1][0], checkPos[1][1], checkPos[1][2], checkPos[1][3])); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {!isProvodaVisible
                        ? <Image image={VoltMetrMinus} width={174 + imageFix} height={30 + imageFix} y={393 + imageFix} x={489 + imageFix} onMouseUp={(e) => { setFourthLink(LinkOn(e, checkPos[2][0], checkPos[2][1], checkPos[2][2], checkPos[2][3])); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {!isProvodaVisible
                        ? <Image image={BataryPlus} width={180 + imageFix} height={30 + imageFix} y={393 + imageFix} x={107 + imageFix} onMouseUp={(e) => { setFifthLink(LinkOn(e, checkPos[3][0], checkPos[3][1], checkPos[3][2], checkPos[3][3])); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {!isProvodaVisible
                        ? <Image image={Key} width={74 + imageFix} height={23 + imageFix} y={393 + imageFix} x={682 + imageFix} onMouseUp={(e) => { setSixthLink(LinkOn(e, checkPos[4][0], checkPos[4][1], checkPos[4][2], checkPos[4][3])); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {!isProvodaVisible
                        ? <Image image={LinkReostatAmpermetrMinus} width={760 + imageFix} height={121 + imageFix} y={776 + imageFix} x={60 + imageFix} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {isKeyOn
                        ? <Image image={KeyOn} width={150 + imageFix} height={50 + imageFix} y={829 + imageFix} x={226 + imageFix} onClick={(e) => { setKeyOn(!isKeyOn); }} onDragMove={(e) => console.log(e)} draggable={true} />
                        : <Image image={KeyOf} width={150 + imageFix} height={50 + imageFix} y={829 + imageFix} x={226 + imageFix} onClick={(e) => { setKeyOn(!isKeyOn); }} onDragMove={(e) => console.log(e)} draggable={true} />}
                    {secondLinkIsLinked
                        ? <Image image={LinkKeyReostat} width={205 + imageFix} height={88 + imageFix} y={786 + imageFix} x={342 + imageFix} onClick={(e) => setKeyOn(!isKeyOn)} onDragMove={(e) => console.log(e)} draggable={true} />
                        : null}
                    {thirdLinkIsLinked
                        ? <Image image={LinkBataryPlusVoltmetrPlus} width={230 + imageFix} height={180 + imageFix} y={577 + imageFix} x={399 + imageFix} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {fourthLinkIsLinked
                        ? <Image image={LinkBataryMinusVoltmetrMinus} width={363 + imageFix} height={262 + imageFix} y={497 + imageFix} x={231 + imageFix} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {fifthLinkIsLinked
                        ? <Image image={LinkAmpermetrPlusBataryPlus} width={480 + imageFix} height={320 + imageFix} y={479 + imageFix} x={149 + imageFix} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {sixthLinkIsLinked
                        ? <Image image={LinkBataryMinusKey} width={360 + imageFix} height={270 + imageFix} y={596 + imageFix} x={233 + imageFix} onClick={(e) => setKeyOn(!isKeyOn)} onDragMove={(e) => console.log(e)} draggable={false} />
                        : null}
                    {polzunokState == 1
                        ? <Image ref={PolzunokRef} image={Polzunok} width={30} height={60} y={764} x={543} onClick={() => setPolzunokState(2)} onDragMove={(e) => console.log(e)} draggable={false} />
                        : <Image ref={PolzunokRef} image={Polzunok} width={30} height={60} y={764} x={773} onClick={() => setPolzunokState(1)} onDragMove={(e) => console.log(e)} draggable={false} />
                    }
                </Layer>
            </Stage>
            <input type='button' value='Restart' onClick={(e) => clearAllValues()} />
        </React.Fragment>
    )
}

export default Lab;