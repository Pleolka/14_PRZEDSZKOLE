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
                        <>
                            <h6>{aktualnosc.tytul}</h6>
                            <div dangerouslySetInnerHTML={{ __html: aktualnosc.childContentfulRekrutacjaAktualnosciTekstRichTextNode.childContentfulRichText.html }}>
                            </div>
                        </>
                    )
                }
                )
            }

            <div dangerouslySetInnerHTML={{ __html: props.content }}
                className={props.className}>
            </div>

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