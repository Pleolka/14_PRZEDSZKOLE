import React from 'react'
import Img from 'gatsby-image'

import Personel from '../../components/personel'

const TabContents = (props) => {



    return (
        <>
            <p><b>{props.title}</b></p>

            <div dangerouslySetInnerHTML={{ __html: props.content }}
                className={props.className}
                style={props.style}
                data-tab={props.dataTab}>
            </div>

            <div className={props.className}
                style={props.style}
                data-tab={props.dataTab}>

                <p><b>{props.name1}</b></p>
                <div dangerouslySetInnerHTML={{ __html: props.content1 }} />

                <p><b>{props.name2}</b></p>
                <div dangerouslySetInnerHTML={{ __html: props.content2 }} />

                <p><b>{props.name3}</b></p>
                <div dangerouslySetInnerHTML={{ __html: props.content3 }} />
            </div>

            <div className="flex4-3-2 personel-wrapper"
                data-tab={props.dataTab}
                style={props.style}>
                {props.personel === undefined ?
                    ""
                    :
                    props.personel.map((node) => {
                        return (
                            <Personel
                                nazwa={node.nazwa}
                                stanowisko={node.stanowisko}
                                zdj={node.zdjecie.fluid}
                                alt={node.zdjecie.title}
                                key={node.zdjecie.fluid.src}
                            />
                        )
                    })}
            </div>

            <div className="flex2 zdj"
                data-tab={props.dataTab}
                style={props.style}>

                {props.zdjecia === undefined ?
                    ""
                    :
                    props.zdjecia.map((zdj) => {
                        return (
                            <Img fluid={zdj.fluid}
                                objectFit="contain"
                                alt={zdj.title} />
                        )
                    })}

            </div>
        </>

    );
}


export default TabContents

/*
const fotos = props.zdjecia === undefined ?
""
:
props.zdjecia.map((zdj) =>
    <span>
        <Img fluid={zdj.fluid}
            objectFit="contain"

        />
    </span>);


    const fotos = props.zdjecia === undefined ?
        ""
        :
        props.zdjecia.map((zdj) =>
            console.log("olcia"));

    console.log("przedszkole")
    console.log(fotos)
    console.log("przedszkole")
    */