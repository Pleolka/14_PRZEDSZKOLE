import React from 'react'
import TabMenu from './tabMenu'
import TabContents from './tabContents'

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isActive: "1" };
        this.changeActive = this.changeActive.bind(this);
    }

    changeActive(ev) {
        this.setState({ isActive: ev.target.getAttribute("data-tab") });
    }

    render() {

        const listContent1 = this.state.isActive === '1' ? (
            <TabContents
                className={"text"}
                dataTab='1'
                content={this.props.oPrzedszkolu}
                title="O Przedszkolu" />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='1'
                    content={this.props.oPrzedszkolu}
                />
            )
            ;

        const listContent2 = this.state.isActive === '2' ? (
            <TabContents
                className={"tab-dydaktyka"}
                dataTab='2'
                content1={this.props.umiejetnosci}
                content2={this.props.poznawanie}
                content3={this.props.okazje}
                name1={this.props.umiejetnosciName}
                name2={this.props.poznawanieName}
                name3={this.props.okazjeName} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='2'
                    content={this.props.dydaktyka}
                />
            )
            ;

        const listContent3 = this.state.isActive === '3' ? (
            <TabContents
                className={"personel"}
                dataTab='3'
                personel={this.props.personel}
                title="Personel" />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='3'
                    personel={this.props.personel}
                />
            )
            ;

        const listContent4 = this.state.isActive === '4' ? (
            <TabContents
                className={"zdj"}
                dataTab='4'
                zdjecia={this.props.zdjecia} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='4'
                    zdjecia={this.props.zdjecia}
                />
            )
            ;

        const listContent5 = this.state.isActive === '5' ? (
            <TabContents
                className={"text"}
                dataTab='5'
                content={this.props.historia}
                title="Historia Przedszkola" />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='5'
                    content={this.props.historia}
                />
            )
            ;

        const listContent6 = this.state.isActive === '6' ? (
            <TabContents
                className={"text"}
                dataTab='6'
                content={this.props.hymn}
                title="Hymn Przedszkola" />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='6'
                    content={this.props.hymn}
                />
            )
            ;

        return (

            <div className="tab" >
                <div className="tab-menu">
                    <ul>
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='1'
                            title='O Przedszkolu'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='2'
                            title='Dydaktyka'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='3'
                            title='Personel'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='4'
                            title='Zdjęcia'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='5'
                            title='Historia'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='6'
                            title='Hymn'
                        />
                    </ul>
                </div>

                <div className="tab-content">
                    {listContent1}
                    {listContent2}
                    {listContent3}
                    {listContent4}
                    {listContent5}
                    {listContent6}
                </div>
            </div>
        );
    }
}

export default Tab