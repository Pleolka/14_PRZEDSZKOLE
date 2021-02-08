import React from 'react'
import Img from 'gatsby-image'

const TabContents = (props) => {

    return (
        <div style={props.style}
            data-tab={props.dataTab}>

            {props.aktualnosci === undefined ?
                ""
                :
                props.aktualnosci.map((aktualnosc) => {
                    return (
                        <div className="rek-aktualnosc">
                            <div className="rek-aktualnosci-header">
                                <h6>{aktualnosc.tytul}</h6>
                                <p>{aktualnosc.date}</p>
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: aktualnosc.childContentfulRekrutacjaAktualnosciTekstRichTextNode.childContentfulRichText.html }}>
                            </div>
                            {aktualnosc.obraz === null ?
                                <></>
                                :
                                <Img fluid={aktualnosc.obraz.fluid}
                                    objectFit="contain"
                                    alt={aktualnosc.obraz.title}
                                />}

                        </div>
                    )
                }
                )
            }

            <div dangerouslySetInnerHTML={{ __html: props.content }}
                className={props.className}>
            </div>

            {props.children}

            {props.downloads === undefined ?
                ""
                :
                props.downloads.map((download) => {
                    return (
                        <div>
                            <a href={download.file.url}>
                                <Img fixed={props.icon}
                                    alt="logo" />
                                <p>{download.file.fileName}
                                </p>
                            </a>
                        </div>
                    )
                }
                )
            }

        </div>

    );
}


export default TabContents

/**
 * {props.download.map((file) => {
                return (
                    <a>{file.fileName}</a>
                )
            }
            )}
 */