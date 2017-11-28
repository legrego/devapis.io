import * as React from "react";

interface IPathProps {
  host: string;
  basePath: string;
}

class Path extends React.Component<IPathProps, any> {
  render() {
    const { host, basePath } = this.props;

    return (
      <pre className="base-url">
        [ Base URL: {host}{basePath} ]
      </pre>
    );
  }
}

interface IContactProps {
  data: any;
}

class Contact extends React.Component<IContactProps, any> {

  render() {
    const { data } = this.props;
    const name = data.get("name") || "the developer";
    const url = data.get("url");
    const email = data.get("email");

    return (
      <div>
        { url && <div><a href={ url } target="_blank">{ name } - Website</a></div> }
        { email &&
          <a href={`mailto:${email}`}>
            { url ? `Send email to ${name}` : `Contact ${name}`}
          </a>
        }
      </div>
    );
  }
}

interface ILicenseProps {
  license: any;
}
class License extends React.Component<ILicenseProps, any> {

  render() {
    const { license } = this.props;
    const name = license.get("name") || "License";
    const url = license.get("url");

    return (
      <div>
        {
          url ? <a target="_blank" href={ url }>{ name }</a>
        : <span>{ name }</span>
        }
      </div>
    );
  }
}

export const CustomInfoPlugin = (system: any) => {
  return {
    components: {
      info: (props: any): any => {
        const { getComponent, specSelectors } = system;

        const info = specSelectors.info();
        const {host, basePath, url} = info;

        const externalDocs = specSelectors.externalDocs();

        const version = info.get("version");
        const description = info.get("description");
        const title = info.get("title");
        const termsOfService = info.get("termsOfService");
        const contact = info.get("contact");
        const license = info.get("license");

        const externalDocsUrl = externalDocs.get("url");
        const externalDocsDescription = externalDocs.get("description");

        const Markdown = getComponent("Markdown");
        const VersionStamp = getComponent("VersionStamp");

        return (
          <div className="info">
            <hgroup className="main">
              { host || basePath ? <Path host={ host } basePath={ basePath } /> : null }
              { url && <a target="_blank" href={ url }><span className="url"> { url } </span></a> }
            </hgroup>

            {
              termsOfService && <div>
                <a target="_blank" href={ termsOfService }>Terms of service</a>
              </div>
            }

            { externalDocsUrl ?
                <a target="_blank" href={externalDocsUrl}>{externalDocsDescription || externalDocsUrl}</a>
            : null }
          </div>
        );
      }
    }
  };
};
