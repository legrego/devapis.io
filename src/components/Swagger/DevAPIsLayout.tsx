import * as React from "react";
import Container from "../Layout/Container";

export interface ILayoutProps {
    getComponent: (componentName: string, isContainerComponent?: boolean) => React.ComponentClass<any>;
    specSelectors: any;
}

export default class CustomLayout extends React.Component<ILayoutProps, any> {
    public render() {
        const{getComponent, specSelectors} = this.props;

        const loadingStatus = specSelectors.loadingStatus();

        return (
            <Container className="swagger-ui">
                {this.maybeShowLoadingStatus(loadingStatus)}
                {this.maybeShowDocumentation(loadingStatus)}
            </Container>
        );
    }

    private maybeShowLoadingStatus(loadingStatus: string) {
        switch (loadingStatus) {
            case "loading":
                return (
                    <div className="info">
                        <h4 className="title">Loading...</h4>
                    </div>
                );
            case "failed":
                return (
                    <div className="info">
                        <h4 className="title">Failed to load spec.</h4>
                    </div>
                );
            case "failedConfig":
                return (
                    <div
                        className="info"
                        style={{ maxWidth: "880px", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                        <h4 className="title">Failed to load config.</h4>
                    </div>
                );
            default:
                return null;
        }
    }

    private maybeShowDocumentation(loadingStatus: string) {
        if (!loadingStatus || loadingStatus === "success") {
            const Info = this.props.getComponent("Servers");
            const Operations = this.props.getComponent("operations", true);
            return (
                <div>
                    <Info />
                    <Operations />
                </div>
            );
        }
        return null;
    }
}
