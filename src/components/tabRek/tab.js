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
                className={""}
                dataTab='1'
                aktualnosci={this.props.aktualnosci} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='1'
                />
            )
            ;

        const listContent2 = this.state.isActive === '2' ? (
            <TabContents
                className={""}
                dataTab='2'
                icon={this.props.icon}
                downloads={this.props.download} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='2'
                    downloads={this.props.download}
                />
            )
            ;

        const listContent3 = this.state.isActive === '3' ? (
            <TabContents
                className={""}
                dataTab='3'
                content={this.props.wazneInfo} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='3'
                />
            )
            ;

        const listContent4 = this.state.isActive === '4' ? (
            <TabContents
                className={""}
                dataTab='4'
                content={this.props.wyniki} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='4'
                />
            )
            ;

        const listContent5 = this.state.isActive === '5' ? (
            <TabContents
                className={""}
                dataTab='5'
                content={this.props.warunki} />
        ) : (
                <TabContents
                    style={{ display: "none" }}
                    dataTab='5'
                />
            )
            ;

        return (

            <div className="tabDyd" >
                <div className="tabDyd-menu">
                    <ul>
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='1'
                            title='Aktualności'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='2'
                            title='Do pobrania'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='3'
                            title='Ważne infomacje'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='4'
                            title='Wyniki'
                        />
                        < TabMenu
                            isActive={this.state.isActive}
                            onClick={this.changeActive}
                            dataTab='5'
                            title='Warunki rekrutacji'
                        />
                    </ul>
                </div>

                <div className="tabDyd-content rek">
                    {listContent1}
                    {listContent2}
                    {listContent3}
                    {listContent4}
                    {listContent5}
                </div>
            </div>
        );
    }
}

export default Tab