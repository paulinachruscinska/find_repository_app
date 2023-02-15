import {backgroundDataBottom} from "../utilities/backgroundData";
export default function Background(){
    return(
        <div className="hero">
            <div className="snow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMax slice">
                    <g  transform="translate(55 42)">
                        <g id="snow-bottom-layer">
                            {backgroundDataBottom.map(({cx, cy,rx,ry} , index)=><ellipse key={index} cx={cx} cy={cy} rx={rx} ry={ry}/>)}
                        </g>
                    </g>
                    <g transform="translate(65 63)">
                        <g id="snow-top-layer">
                            <circle cx="8" cy="776" r="8"/>
                            <circle cx="189" cy="925" r="8"/>
                            <circle cx="548" cy="844" r="8"/>
                            <circle cx="685" cy="1115" r="8"/>
                            <circle cx="858" cy="909" r="8"/>
                            <circle cx="874" cy="1438" r="8" transform="rotate(180 874 1438)"/>
                            <circle cx="657" cy="1256" r="8" transform="rotate(180 657 1256)"/>
                            <circle cx="443" cy="1372" r="8" transform="rotate(180 443 1372)"/>
                            <circle cx="339" cy="1107" r="8" transform="rotate(180 339 1107)"/>
                            <circle cx="24" cy="1305" r="8" transform="rotate(180 24 1305)"/>
                            <circle cx="8" cy="8" r="8"/>
                            <circle cx="189" cy="157" r="8"/>
                            <circle cx="548" cy="76" r="8"/>
                            <circle cx="685" cy="347" r="8"/>
                            <circle cx="858" cy="141" r="8"/>
                            <circle cx="874" cy="670" r="8" transform="rotate(180 874 670)"/>
                            <circle cx="657" cy="488" r="8" transform="rotate(180 657 488)"/>
                            <circle cx="443" cy="604" r="8" transform="rotate(180 443 604)"/>
                            <circle cx="339" cy="339" r="8" transform="rotate(180 339 339)"/>
                            <circle cx="24" cy="537" r="8" transform="rotate(180 24 537)"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )

}


