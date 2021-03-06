/* tslint:disable */
/* An object with an id, parent, and children */
export interface Node {
  id: string; /* The id of the node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null; /* Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection | null; /* Connection to all SitePlugin nodes */
  allDirectory?: DirectoryConnection | null; /* Connection to all Directory nodes */
  allFile?: FileConnection | null; /* Connection to all File nodes */
  allImageSharp?: ImageSharpConnection | null; /* Connection to all ImageSharp nodes */
  allMarkdownRemark?: MarkdownRemarkConnection | null; /* Connection to all MarkdownRemark nodes */
  allAuthorJson?: AuthorJsonConnection | null; /* Connection to all AuthorJson nodes */
  allApisJson?: ApisJsonConnection | null; /* Connection to all ApisJson nodes */
  sitePage?: SitePage | null; 
  sitePlugin?: SitePlugin | null; 
  site?: Site | null; 
  directory?: Directory | null; 
  file?: File | null; 
  imageSharp?: ImageSharp | null; 
  markdownRemark?: MarkdownRemark | null; 
  authorJson?: AuthorJson | null; 
  apisJson?: ApisJson | null; 
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePageEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePageGroupConnectionConnection[] | null; 
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean; /* When paginating, are there more items? */
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  layout?: string | null; 
  jsonName?: string | null; 
  internalComponentName?: string | null; 
  path?: string | null; 
  component?: string | null; 
  componentChunkName?: string | null; 
  context?: context | null; 
  updatedAt?: number | null; 
  pluginCreator?: SitePlugin | null; 
  pluginCreatorId?: string | null; 
  componentPath?: string | null; 
  internal?: internal_10 | null; 
}

export interface context {
  slug?: string | null; 
  api?: api | null; 
  tag?: string | null; 
  skip?: number | null; 
}

export interface api {
  name?: string | null; 
  displayName?: string | null; 
  specUrl?: string | null; 
  faIcon?: string | null; 
  tagline?: string | null; 
  currentVersion?: string | null; 
  available?: boolean | null; 
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  resolve?: string | null; 
  name?: string | null; 
  version?: string | null; 
  pluginOptions?: pluginOptions_3 | null; 
  nodeAPIs?: string[] | null; 
  pluginFilepath?: string | null; 
  packageJson?: packageJson_2 | null; 
  internal?: internal_11 | null; 
}

export interface pluginOptions_3 {
  plugins?: plugins_2[] | null; 
  name?: string | null; 
  path?: string | null; 
  maxWidth?: number | null; 
  backgroundColor?: string | null; 
  short_name?: string | null; 
  start_url?: string | null; 
  background_color?: string | null; 
  theme_color?: string | null; 
  display?: string | null; 
  precision?: number | null; 
}

export interface plugins_2 {
  resolve?: string | null; 
  id?: string | null; 
  name?: string | null; 
  version?: string | null; 
  pluginOptions?: pluginOptions_4 | null; 
  pluginFilepath?: string | null; 
}

export interface pluginOptions_4 {
  maxWidth?: number | null; 
  backgroundColor?: string | null; 
}

export interface packageJson_2 {
  name?: string | null; 
  description?: string | null; 
  version?: string | null; 
  main?: string | null; 
  keywords?: string[] | null; 
  license?: string | null; 
  dependencies?: dependencies_2[] | null; 
  devDependencies?: devDependencies_2[] | null; 
}

export interface dependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

export interface devDependencies_2 {
  name?: string | null; 
  version?: string | null; 
}

export interface internal_11 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface internal_10 {
  type?: string | null; 
  contentDigest?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePageGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null; /* The item at the end of the edge */
  next?: SitePage | null; /* The next edge in the connection */
  previous?: SitePage | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePluginEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: sitePluginGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePluginGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null; /* The item at the end of the edge */
  next?: SitePlugin | null; /* The next edge in the connection */
  previous?: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: DirectoryEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: directoryGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* Node of type Directory */
export interface Directory extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_12 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: number | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  ino?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
}

export interface internal_12 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: directoryGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null; /* The item at the end of the edge */
  next?: Directory | null; /* The next edge in the connection */
  previous?: Directory | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: FileEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: fileGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* Node of type File */
export interface File extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  childAuthorJson?: AuthorJson | null; /* The child of this node of type authorJson */
  childrenApisJson?: ApisJson[] | null; /* The children of this node of type apisJson */
  childMarkdownRemark?: MarkdownRemark | null; /* The child of this node of type markdownRemark */
  childImageSharp?: ImageSharp | null; /* The child of this node of type imageSharp */
  internal?: internal_13 | null; 
  sourceInstanceName?: string | null; 
  absolutePath?: string | null; 
  relativePath?: string | null; 
  extension?: string | null; 
  size?: string | null; 
  prettySize?: string | null; 
  modifiedTime?: string | null; 
  accessTime?: string | null; 
  changeTime?: string | null; 
  birthTime?: string | null; 
  root?: string | null; 
  dir?: string | null; 
  base?: string | null; 
  ext?: string | null; 
  name?: string | null; 
  relativeDirectory?: string | null; 
  dev?: number | null; 
  mode?: number | null; 
  nlink?: number | null; 
  uid?: number | null; 
  gid?: number | null; 
  rdev?: number | null; 
  ino?: number | null; 
  atime?: string | null; 
  mtime?: string | null; 
  ctime?: string | null; 
  birthtime?: string | null; 
}
/* Node of type AuthorJson */
export interface AuthorJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  bio?: string | null; 
  avatar?: File | null; 
  twitter?: string | null; 
  github?: string | null; 
  internal?: internal_14 | null; 
}

export interface internal_14 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type ApisJson */
export interface ApisJson extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  name?: string | null; 
  displayName?: string | null; 
  githubUrl?: string | null; 
  specUrl?: string | null; 
  faIcon?: string | null; 
  tagline?: string | null; 
  currentVersion?: string | null; 
  available?: boolean | null; 
  internal?: internal_15 | null; 
}

export interface internal_15 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_16 | null; 
  frontmatter?: frontmatter_2 | null; 
  fileAbsolutePath?: string | null; 
  fields?: fields_2 | null; 
  html?: string | null; 
  excerpt?: string | null; 
  headings?: MarkdownHeading[] | null; 
  timeToRead?: number | null; 
  tableOfContents?: string | null; 
  wordCount?: wordCount | null; 
}

export interface internal_16 {
  content?: string | null; 
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
  fieldOwners?: fieldOwners_2 | null; 
}

export interface fieldOwners_2 {
  slug?: string | null; 
}

export interface frontmatter_2 {
  title?: string | null; 
  createdDate?: string | null; 
  updatedDate?: string | null; 
  author?: AuthorJson | null; 
  _PARENT?: string | null; 
  parent?: string | null; 
  tags?: string[] | null; 
  image?: File | null; 
  draft?: boolean | null; 
}

export interface fields_2 {
  slug?: string | null; 
}

export interface MarkdownHeading {
  value?: string | null; 
  depth?: number | null; 
}

export interface wordCount {
  paragraphs?: number | null; 
  sentences?: number | null; 
  words?: number | null; 
}
/* Node of type ImageSharp */
export interface ImageSharp extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  internal?: internal_17 | null; 
  original?: ImageSharpOriginal | null; 
  resolutions?: ImageSharpResolutions | null; 
  sizes?: ImageSharpSizes | null; 
  responsiveResolution?: ImageSharpResponsiveResolution | null; 
  responsiveSizes?: ImageSharpResponsiveSizes | null; 
  resize?: ImageSharpResize | null; 
}

export interface internal_17 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface ImageSharpOriginal {
  width?: number | null; 
  height?: number | null; 
  src?: string | null; 
}

export interface ImageSharpResolutions {
  base64?: string | null; 
  tracedSVG?: string | null; 
  aspectRatio?: number | null; 
  width?: number | null; 
  height?: number | null; 
  src?: string | null; 
  srcSet?: string | null; 
  srcWebp?: string | null; 
  srcSetWebp?: string | null; 
  originalName?: string | null; 
}

export interface ImageSharpSizes {
  base64?: string | null; 
  tracedSVG?: string | null; 
  aspectRatio?: number | null; 
  src?: string | null; 
  srcSet?: string | null; 
  srcWebp?: string | null; 
  srcSetWebp?: string | null; 
  sizes?: string | null; 
  originalImg?: string | null; 
  originalName?: string | null; 
}

export interface ImageSharpResponsiveResolution {
  base64?: string | null; 
  aspectRatio?: number | null; 
  width?: number | null; 
  height?: number | null; 
  src?: string | null; 
  srcSet?: string | null; 
  originalName?: string | null; 
}

export interface ImageSharpResponsiveSizes {
  base64?: string | null; 
  aspectRatio?: number | null; 
  src?: string | null; 
  srcSet?: string | null; 
  sizes?: string | null; 
  originalImg?: string | null; 
  originalName?: string | null; 
}

export interface ImageSharpResize {
  src?: string | null; 
  tracedSVG?: string | null; 
  width?: number | null; 
  height?: number | null; 
  aspectRatio?: number | null; 
  originalName?: string | null; 
}

export interface internal_13 {
  contentDigest?: string | null; 
  mediaType?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: fileGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null; /* The item at the end of the edge */
  next?: File | null; /* The next edge in the connection */
  previous?: File | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ImageSharpConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: ImageSharpEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: imageSharpGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface ImageSharpEdge {
  node?: ImageSharp | null; /* The item at the end of the edge */
  next?: ImageSharp | null; /* The next edge in the connection */
  previous?: ImageSharp | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: imageSharpGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface imageSharpGroupConnectionEdge {
  node?: ImageSharp | null; /* The item at the end of the edge */
  next?: ImageSharp | null; /* The next edge in the connection */
  previous?: ImageSharp | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: MarkdownRemarkEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: markdownRemarkGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: markdownRemarkGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null; /* The item at the end of the edge */
  next?: MarkdownRemark | null; /* The next edge in the connection */
  previous?: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface AuthorJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: AuthorJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: authorJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface AuthorJsonEdge {
  node?: AuthorJson | null; /* The item at the end of the edge */
  next?: AuthorJson | null; /* The next edge in the connection */
  previous?: AuthorJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface authorJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: authorJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface authorJsonGroupConnectionEdge {
  node?: AuthorJson | null; /* The item at the end of the edge */
  next?: AuthorJson | null; /* The next edge in the connection */
  previous?: AuthorJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ApisJsonConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: ApisJsonEdge[] | null; /* A list of edges. */
  totalCount?: number | null; 
  distinct?: string[] | null; 
  group?: apisJsonGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface ApisJsonEdge {
  node?: ApisJson | null; /* The item at the end of the edge */
  next?: ApisJson | null; /* The next edge in the connection */
  previous?: ApisJson | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface apisJsonGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: apisJsonGroupConnectionEdge[] | null; /* A list of edges. */
  field?: string | null; 
  fieldValue?: string | null; 
  totalCount?: number | null; 
}
/* An edge in a connection. */
export interface apisJsonGroupConnectionEdge {
  node?: ApisJson | null; /* The item at the end of the edge */
  next?: ApisJson | null; /* The next edge in the connection */
  previous?: ApisJson | null; /* The previous edge in the connection */
}
/* Node of type Site */
export interface Site extends Node {
  id: string; /* The id of this node. */
  parent?: Node | null; /* The parent of this node. */
  children?: Node[] | null; /* The children of this node. */
  siteMetadata?: siteMetadata_2 | null; 
  port?: string | null; 
  host?: string | null; 
  mapping?: mapping_2 | null; 
  pathPrefix?: string | null; 
  polyfill?: boolean | null; 
  buildTime?: string | null; 
  internal?: internal_18 | null; 
}

export interface siteMetadata_2 {
  title?: string | null; 
}

export interface mapping_2 {
  MarkdownRemark_frontmatter_author?: string | null; 
}

export interface internal_18 {
  contentDigest?: string | null; 
  type?: string | null; 
  owner?: string | null; 
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]; 
  order?: sitePageConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePage {
  layout?: sitePageConnectionLayoutQueryString | null; 
  jsonName?: sitePageConnectionJsonNameQueryString | null; 
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null; 
  path?: sitePageConnectionPathQueryString_2 | null; 
  component?: sitePageConnectionComponentQueryString | null; 
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null; 
  context?: sitePageConnectionContextInputObject | null; 
  updatedAt?: sitePageConnectionUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString | null; 
  componentPath?: sitePageConnectionComponentPathQueryString | null; 
  id?: sitePageConnectionIdQueryString_2 | null; 
  internal?: sitePageConnectionInternalInputObject_2 | null; 
}

export interface sitePageConnectionLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextInputObject {
  slug?: sitePageConnectionContextSlugQueryString | null; 
  api?: sitePageConnectionContextApiInputObject | null; 
  tag?: sitePageConnectionContextTagQueryString | null; 
  skip?: sitePageConnectionContextSkipQueryInteger | null; 
}

export interface sitePageConnectionContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiInputObject {
  name?: sitePageConnectionContextApiNameQueryString | null; 
  displayName?: sitePageConnectionContextApiDisplayNameQueryString | null; 
  specUrl?: sitePageConnectionContextApiSpecUrlQueryString | null; 
  faIcon?: sitePageConnectionContextApiFaIconQueryString | null; 
  tagline?: sitePageConnectionContextApiTaglineQueryString | null; 
  currentVersion?: sitePageConnectionContextApiCurrentVersionQueryString | null; 
  available?: sitePageConnectionContextApiAvailableQueryBoolean | null; 
}

export interface sitePageConnectionContextApiNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiDisplayNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiSpecUrlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiFaIconQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiTaglineQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiCurrentVersionQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextApiAvailableQueryBoolean {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface sitePageConnectionContextTagQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionContextSkipQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null; 
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]; 
  order?: sitePluginConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null; 
  id?: sitePluginConnectionIdQueryString_2 | null; 
  name?: sitePluginConnectionNameQueryString_2 | null; 
  version?: sitePluginConnectionVersionQueryString_2 | null; 
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null; 
  internal?: sitePluginConnectionInternalInputObject_2 | null; 
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null; 
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null; 
  maxWidth?: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null; 
  backgroundColor?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 | null; 
  short_name?: sitePluginConnectionPluginOptionsShortNameQueryString_2 | null; 
  start_url?: sitePluginConnectionPluginOptionsStartUrlQueryString_2 | null; 
  background_color?: sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 | null; 
  theme_color?: sitePluginConnectionPluginOptionsThemeColorQueryString_2 | null; 
  display?: sitePluginConnectionPluginOptionsDisplayQueryString_2 | null; 
  precision?: sitePluginConnectionPluginOptionsPrecisionQueryInteger_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in?: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null; 
  id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null; 
  name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null; 
  version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null; 
  pluginOptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null; 
  pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null; 
  backgroundColor?: sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsBackgroundColorQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPluginOptionsPrecisionQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null; 
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null; 
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null; 
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null; 
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null; 
  type?: sitePluginConnectionInternalTypeQueryString_2 | null; 
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[]; 
  order?: directoryConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null; 
  internal?: directoryConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: directoryConnectionRelativePathQueryString_2 | null; 
  extension?: directoryConnectionExtensionQueryString_2 | null; 
  size?: directoryConnectionSizeQueryInteger_2 | null; 
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null; 
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null; 
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null; 
  root?: directoryConnectionRootQueryString_2 | null; 
  dir?: directoryConnectionDirQueryString_2 | null; 
  base?: directoryConnectionBaseQueryString_2 | null; 
  ext?: directoryConnectionExtQueryString_2 | null; 
  name?: directoryConnectionNameQueryString_2 | null; 
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: directoryConnectionDevQueryInteger_2 | null; 
  mode?: directoryConnectionModeQueryInteger_2 | null; 
  nlink?: directoryConnectionNlinkQueryInteger_2 | null; 
  uid?: directoryConnectionUidQueryInteger_2 | null; 
  gid?: directoryConnectionGidQueryInteger_2 | null; 
  rdev?: directoryConnectionRdevQueryInteger_2 | null; 
  ino?: directoryConnectionInoQueryInteger_2 | null; 
  atime?: directoryConnectionAtimeQueryString_2 | null; 
  mtime?: directoryConnectionMtimeQueryString_2 | null; 
  ctime?: directoryConnectionCtimeQueryString_2 | null; 
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null; 
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null; 
  type?: directoryConnectionInternalTypeQueryString_2 | null; 
  owner?: directoryConnectionInternalOwnerQueryString_2 | null; 
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]; 
  order?: fileConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null; 
  internal?: fileConnectionInternalInputObject_2 | null; 
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null; 
  relativePath?: fileConnectionRelativePathQueryString_2 | null; 
  extension?: fileConnectionExtensionQueryString_2 | null; 
  size?: fileConnectionSizeQueryInteger_2 | null; 
  prettySize?: fileConnectionPrettySizeQueryString_2 | null; 
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null; 
  accessTime?: fileConnectionAccessTimeQueryString_2 | null; 
  changeTime?: fileConnectionChangeTimeQueryString_2 | null; 
  birthTime?: fileConnectionBirthTimeQueryString_2 | null; 
  root?: fileConnectionRootQueryString_2 | null; 
  dir?: fileConnectionDirQueryString_2 | null; 
  base?: fileConnectionBaseQueryString_2 | null; 
  ext?: fileConnectionExtQueryString_2 | null; 
  name?: fileConnectionNameQueryString_2 | null; 
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null; 
  dev?: fileConnectionDevQueryInteger_2 | null; 
  mode?: fileConnectionModeQueryInteger_2 | null; 
  nlink?: fileConnectionNlinkQueryInteger_2 | null; 
  uid?: fileConnectionUidQueryInteger_2 | null; 
  gid?: fileConnectionGidQueryInteger_2 | null; 
  rdev?: fileConnectionRdevQueryInteger_2 | null; 
  ino?: fileConnectionInoQueryInteger_2 | null; 
  atime?: fileConnectionAtimeQueryString_2 | null; 
  mtime?: fileConnectionMtimeQueryString_2 | null; 
  ctime?: fileConnectionCtimeQueryString_2 | null; 
  birthtime?: fileConnectionBirthtimeQueryString_2 | null; 
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null; 
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null; 
  type?: fileConnectionInternalTypeQueryString_2 | null; 
  owner?: fileConnectionInternalOwnerQueryString_2 | null; 
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface DuotoneGradient {
  highlight?: string | null; 
  shadow?: string | null; 
}

export interface Potrace {
  turnPolicy?: PotraceTurnPolicy | null; 
  turdSize?: number | null; 
  alphaMax?: number | null; 
  optCurve?: boolean | null; 
  optTolerance?: number | null; 
  threshold?: number | null; 
  blackOnWhite?: boolean | null; 
  color?: string | null; 
  background?: string | null; 
}

export interface imageSharpConnectionSort {
  fields: ImageSharpConnectionSortByFieldsEnum[]; 
  order?: imageSharpConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterImageSharp {
  id?: imageSharpConnectionIdQueryString_2 | null; 
  internal?: imageSharpConnectionInternalInputObject_2 | null; 
  original?: originalTypeName_4 | null; 
  resolutions?: resolutionsTypeName_4 | null; 
  sizes?: sizesTypeName_4 | null; 
  responsiveResolution?: responsiveResolutionTypeName_4 | null; 
  responsiveSizes?: responsiveSizesTypeName_4 | null; 
  resize?: resizeTypeName_4 | null; 
}

export interface imageSharpConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest?: imageSharpConnectionInternalContentDigestQueryString_2 | null; 
  type?: imageSharpConnectionInternalTypeQueryString_2 | null; 
  owner?: imageSharpConnectionInternalOwnerQueryString_2 | null; 
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface originalTypeName_4 {
  width?: originalWidthQueryFloat_4 | null; 
  height?: originalHeightQueryFloat_4 | null; 
  src?: originalSrcQueryString_4 | null; 
}

export interface originalWidthQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface originalHeightQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface originalSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsTypeName_4 {
  base64?: resolutionsBase64QueryString_4 | null; 
  tracedSVG?: resolutionsTracedSvgQueryString_4 | null; 
  aspectRatio?: resolutionsAspectRatioQueryFloat_4 | null; 
  width?: resolutionsWidthQueryFloat_4 | null; 
  height?: resolutionsHeightQueryFloat_4 | null; 
  src?: resolutionsSrcQueryString_4 | null; 
  srcSet?: resolutionsSrcSetQueryString_4 | null; 
  srcWebp?: resolutionsSrcWebpQueryString_4 | null; 
  srcSetWebp?: resolutionsSrcSetWebpQueryString_4 | null; 
  originalName?: resolutionsOriginalNameQueryString_4 | null; 
}

export interface resolutionsBase64QueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsTracedSvgQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsWidthQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsHeightQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcSetQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcWebpQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsOriginalNameQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesTypeName_4 {
  base64?: sizesBase64QueryString_4 | null; 
  tracedSVG?: sizesTracedSvgQueryString_4 | null; 
  aspectRatio?: sizesAspectRatioQueryFloat_4 | null; 
  src?: sizesSrcQueryString_4 | null; 
  srcSet?: sizesSrcSetQueryString_4 | null; 
  srcWebp?: sizesSrcWebpQueryString_4 | null; 
  srcSetWebp?: sizesSrcSetWebpQueryString_4 | null; 
  sizes?: sizesSizesQueryString_4 | null; 
  originalImg?: sizesOriginalImgQueryString_4 | null; 
  originalName?: sizesOriginalNameQueryString_4 | null; 
}

export interface sizesBase64QueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesTracedSvgQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesAspectRatioQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sizesSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcSetQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcWebpQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcSetWebpQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSizesQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesOriginalImgQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesOriginalNameQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionTypeName_4 {
  base64?: responsiveResolutionBase64QueryString_4 | null; 
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_4 | null; 
  width?: responsiveResolutionWidthQueryFloat_4 | null; 
  height?: responsiveResolutionHeightQueryFloat_4 | null; 
  src?: responsiveResolutionSrcQueryString_4 | null; 
  srcSet?: responsiveResolutionSrcSetQueryString_4 | null; 
  originalName?: responsiveResolutionOriginalNameQueryString_4 | null; 
}

export interface responsiveResolutionBase64QueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionWidthQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionHeightQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionSrcSetQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionOriginalNameQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesTypeName_4 {
  base64?: responsiveSizesBase64QueryString_4 | null; 
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_4 | null; 
  src?: responsiveSizesSrcQueryString_4 | null; 
  srcSet?: responsiveSizesSrcSetQueryString_4 | null; 
  sizes?: responsiveSizesSizesQueryString_4 | null; 
  originalImg?: responsiveSizesOriginalImgQueryString_4 | null; 
  originalName?: responsiveSizesOriginalNameQueryString_4 | null; 
}

export interface responsiveSizesBase64QueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveSizesSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesSrcSetQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesSizesQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesOriginalImgQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesOriginalNameQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeTypeName_4 {
  src?: resizeSrcQueryString_4 | null; 
  tracedSVG?: resizeTracedSvgQueryString_4 | null; 
  width?: resizeWidthQueryInt_4 | null; 
  height?: resizeHeightQueryInt_4 | null; 
  aspectRatio?: resizeAspectRatioQueryFloat_4 | null; 
  originalName?: resizeOriginalNameQueryString_4 | null; 
}

export interface resizeSrcQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeTracedSvgQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeWidthQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeHeightQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeAspectRatioQueryFloat_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeOriginalNameQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[]; 
  order?: markdownRemarkConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null; 
  internal?: markdownRemarkConnectionInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null; 
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null; 
  fields?: markdownRemarkConnectionFieldsInputObject_2 | null; 
  html?: htmlQueryString_4 | null; 
  excerpt?: excerptQueryString_4 | null; 
  headings?: headingsQueryList_4 | null; 
  timeToRead?: timeToReadQueryInt_4 | null; 
  tableOfContents?: tableOfContentsQueryString_4 | null; 
  wordCount?: wordCountTypeName_4 | null; 
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null; 
  fieldOwners?: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null; 
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null; 
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null; 
  createdDate?: markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 | null; 
  updatedDate?: markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 | null; 
  author?: markdownRemarkConnectionFrontmatterAuthorQueryString_2 | null; 
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null; 
  tags?: markdownRemarkConnectionFrontmatterTagsQueryList_2 | null; 
  image?: markdownRemarkConnectionFrontmatterImageQueryString_2 | null; 
  draft?: markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 | null; 
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterCreatedDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterUpdatedDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterTagsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface markdownRemarkConnectionFrontmatterImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug?: markdownRemarkConnectionFieldsSlugQueryString_2 | null; 
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface htmlQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface excerptQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null; 
  depth?: headingsListElemDepthQueryInt_4 | null; 
  in?: markdownHeadingInputObject_4[] | null; 
}

export interface headingsListElemValueQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsListElemDepthQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface markdownHeadingInputObject_4 {
  value?: string | null; 
  depth?: number | null; 
}

export interface timeToReadQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface tableOfContentsQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null; 
  sentences?: wordCountSentencesQueryInt_4 | null; 
  words?: wordCountWordsQueryInt_4 | null; 
}

export interface wordCountParagraphsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountSentencesQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountWordsQueryInt_4 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface authorJsonConnectionSort {
  fields: AuthorJsonConnectionSortByFieldsEnum[]; 
  order?: authorJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterAuthorJson {
  id?: authorJsonConnectionIdQueryString_2 | null; 
  bio?: authorJsonConnectionBioQueryString_2 | null; 
  avatar?: authorJsonConnectionAvatarQueryString_2 | null; 
  twitter?: authorJsonConnectionTwitterQueryString_2 | null; 
  github?: authorJsonConnectionGithubQueryString_2 | null; 
  internal?: authorJsonConnectionInternalInputObject_2 | null; 
}

export interface authorJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionBioQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionAvatarQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionTwitterQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionGithubQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionInternalInputObject_2 {
  contentDigest?: authorJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: authorJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: authorJsonConnectionInternalOwnerQueryString_2 | null; 
}

export interface authorJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionSort {
  fields: ApisJsonConnectionSortByFieldsEnum[]; 
  order?: apisJsonConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterApisJson {
  name?: apisJsonConnectionNameQueryString_2 | null; 
  displayName?: apisJsonConnectionDisplayNameQueryString_2 | null; 
  githubUrl?: apisJsonConnectionGithubUrlQueryString_2 | null; 
  specUrl?: apisJsonConnectionSpecUrlQueryString_2 | null; 
  faIcon?: apisJsonConnectionFaIconQueryString_2 | null; 
  tagline?: apisJsonConnectionTaglineQueryString_2 | null; 
  currentVersion?: apisJsonConnectionCurrentVersionQueryString_2 | null; 
  available?: apisJsonConnectionAvailableQueryBoolean_2 | null; 
  id?: apisJsonConnectionIdQueryString_2 | null; 
  internal?: apisJsonConnectionInternalInputObject_2 | null; 
}

export interface apisJsonConnectionNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionDisplayNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionGithubUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionSpecUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionFaIconQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionTaglineQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionCurrentVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionAvailableQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface apisJsonConnectionIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionInternalInputObject_2 {
  contentDigest?: apisJsonConnectionInternalContentDigestQueryString_2 | null; 
  type?: apisJsonConnectionInternalTypeQueryString_2 | null; 
  owner?: apisJsonConnectionInternalOwnerQueryString_2 | null; 
}

export interface apisJsonConnectionInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonConnectionInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageLayoutQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageJsonNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePagePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextInputObject {
  slug?: sitePageContextSlugQueryString | null; 
  api?: sitePageContextApiInputObject | null; 
  tag?: sitePageContextTagQueryString | null; 
  skip?: sitePageContextSkipQueryInteger | null; 
}

export interface sitePageContextSlugQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiInputObject {
  name?: sitePageContextApiNameQueryString | null; 
  displayName?: sitePageContextApiDisplayNameQueryString | null; 
  specUrl?: sitePageContextApiSpecUrlQueryString | null; 
  faIcon?: sitePageContextApiFaIconQueryString | null; 
  tagline?: sitePageContextApiTaglineQueryString | null; 
  currentVersion?: sitePageContextApiCurrentVersionQueryString | null; 
  available?: sitePageContextApiAvailableQueryBoolean | null; 
}

export interface sitePageContextApiNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiDisplayNameQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiSpecUrlQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiFaIconQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiTaglineQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiCurrentVersionQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextApiAvailableQueryBoolean {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface sitePageContextTagQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageContextSkipQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePageUpdatedAtQueryInteger {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageComponentPathQueryString {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null; 
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null; 
  owner?: sitePageInternalOwnerQueryString_2 | null; 
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null; 
  name?: sitePluginPluginOptionsNameQueryString_2 | null; 
  path?: sitePluginPluginOptionsPathQueryString_2 | null; 
  maxWidth?: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null; 
  backgroundColor?: sitePluginPluginOptionsBackgroundColorQueryString_3 | null; 
  short_name?: sitePluginPluginOptionsShortNameQueryString_2 | null; 
  start_url?: sitePluginPluginOptionsStartUrlQueryString_2 | null; 
  background_color?: sitePluginPluginOptionsBackgroundColorQueryString_4 | null; 
  theme_color?: sitePluginPluginOptionsThemeColorQueryString_2 | null; 
  display?: sitePluginPluginOptionsDisplayQueryString_2 | null; 
  precision?: sitePluginPluginOptionsPrecisionQueryInteger_2 | null; 
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in?: sitePluginPluginOptionsPluginsInputObject_2[] | null; 
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null; 
  id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null; 
  name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null; 
  version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null; 
  pluginOptions?: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null; 
  pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null; 
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null; 
  backgroundColor?: sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsBackgroundColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsShortNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsBackgroundColorQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsDisplayQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPluginOptionsPrecisionQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null; 
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null; 
  version?: sitePluginPackageJsonVersionQueryString_2 | null; 
  main?: sitePluginPackageJsonMainQueryString_2 | null; 
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null; 
  license?: sitePluginPackageJsonLicenseQueryString_2 | null; 
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null; 
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null; 
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null; 
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null; 
  type?: sitePluginInternalTypeQueryString_2 | null; 
  owner?: sitePluginInternalOwnerQueryString_2 | null; 
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteSiteMetadataInputObject_2 {
  title?: siteSiteMetadataTitleQueryString_2 | null; 
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePortQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteHostQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteMappingInputObject_2 {
  MarkdownRemark_frontmatter_author?: siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 | null; 
}

export interface siteMappingMarkdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null; 
  type?: siteInternalTypeQueryString_2 | null; 
  owner?: siteInternalOwnerQueryString_2 | null; 
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null; 
  type?: directoryInternalTypeQueryString_2 | null; 
  owner?: directoryInternalOwnerQueryString_2 | null; 
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null; 
  mediaType?: fileInternalMediaTypeQueryString_2 | null; 
  type?: fileInternalTypeQueryString_2 | null; 
  owner?: fileInternalOwnerQueryString_2 | null; 
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileExtensionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRootQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileDirQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBaseQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileExtQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileDevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileModeQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileUidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileGidQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileInoQueryInteger_2 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface fileAtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileMtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileCtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpInternalInputObject_2 {
  contentDigest?: imageSharpInternalContentDigestQueryString_2 | null; 
  type?: imageSharpInternalTypeQueryString_2 | null; 
  owner?: imageSharpInternalOwnerQueryString_2 | null; 
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface originalTypeName_3 {
  width?: originalWidthQueryFloat_3 | null; 
  height?: originalHeightQueryFloat_3 | null; 
  src?: originalSrcQueryString_3 | null; 
}

export interface originalWidthQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface originalHeightQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface originalSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsTypeName_3 {
  base64?: resolutionsBase64QueryString_3 | null; 
  tracedSVG?: resolutionsTracedSvgQueryString_3 | null; 
  aspectRatio?: resolutionsAspectRatioQueryFloat_3 | null; 
  width?: resolutionsWidthQueryFloat_3 | null; 
  height?: resolutionsHeightQueryFloat_3 | null; 
  src?: resolutionsSrcQueryString_3 | null; 
  srcSet?: resolutionsSrcSetQueryString_3 | null; 
  srcWebp?: resolutionsSrcWebpQueryString_3 | null; 
  srcSetWebp?: resolutionsSrcSetWebpQueryString_3 | null; 
  originalName?: resolutionsOriginalNameQueryString_3 | null; 
}

export interface resolutionsBase64QueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsTracedSvgQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsWidthQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsHeightQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resolutionsSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcSetQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcWebpQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resolutionsOriginalNameQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesTypeName_3 {
  base64?: sizesBase64QueryString_3 | null; 
  tracedSVG?: sizesTracedSvgQueryString_3 | null; 
  aspectRatio?: sizesAspectRatioQueryFloat_3 | null; 
  src?: sizesSrcQueryString_3 | null; 
  srcSet?: sizesSrcSetQueryString_3 | null; 
  srcWebp?: sizesSrcWebpQueryString_3 | null; 
  srcSetWebp?: sizesSrcSetWebpQueryString_3 | null; 
  sizes?: sizesSizesQueryString_3 | null; 
  originalImg?: sizesOriginalImgQueryString_3 | null; 
  originalName?: sizesOriginalNameQueryString_3 | null; 
}

export interface sizesBase64QueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesTracedSvgQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesAspectRatioQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface sizesSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcSetQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcWebpQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSrcSetWebpQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesSizesQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesOriginalImgQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface sizesOriginalNameQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionTypeName_3 {
  base64?: responsiveResolutionBase64QueryString_3 | null; 
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_3 | null; 
  width?: responsiveResolutionWidthQueryFloat_3 | null; 
  height?: responsiveResolutionHeightQueryFloat_3 | null; 
  src?: responsiveResolutionSrcQueryString_3 | null; 
  srcSet?: responsiveResolutionSrcSetQueryString_3 | null; 
  originalName?: responsiveResolutionOriginalNameQueryString_3 | null; 
}

export interface responsiveResolutionBase64QueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionWidthQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionHeightQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveResolutionSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionSrcSetQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveResolutionOriginalNameQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesTypeName_3 {
  base64?: responsiveSizesBase64QueryString_3 | null; 
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_3 | null; 
  src?: responsiveSizesSrcQueryString_3 | null; 
  srcSet?: responsiveSizesSrcSetQueryString_3 | null; 
  sizes?: responsiveSizesSizesQueryString_3 | null; 
  originalImg?: responsiveSizesOriginalImgQueryString_3 | null; 
  originalName?: responsiveSizesOriginalNameQueryString_3 | null; 
}

export interface responsiveSizesBase64QueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface responsiveSizesSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesSrcSetQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesSizesQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesOriginalImgQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface responsiveSizesOriginalNameQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeTypeName_3 {
  src?: resizeSrcQueryString_3 | null; 
  tracedSVG?: resizeTracedSvgQueryString_3 | null; 
  width?: resizeWidthQueryInt_3 | null; 
  height?: resizeHeightQueryInt_3 | null; 
  aspectRatio?: resizeAspectRatioQueryFloat_3 | null; 
  originalName?: resizeOriginalNameQueryString_3 | null; 
}

export interface resizeSrcQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeTracedSvgQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface resizeWidthQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeHeightQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeAspectRatioQueryFloat_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface resizeOriginalNameQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null; 
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null; 
  type?: markdownRemarkInternalTypeQueryString_2 | null; 
  owner?: markdownRemarkInternalOwnerQueryString_2 | null; 
  fieldOwners?: markdownRemarkInternalFieldOwnersInputObject_2 | null; 
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug?: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null; 
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null; 
  createdDate?: markdownRemarkFrontmatterCreatedDateQueryString_2 | null; 
  updatedDate?: markdownRemarkFrontmatterUpdatedDateQueryString_2 | null; 
  author?: markdownRemarkFrontmatterAuthorQueryString_2 | null; 
  _PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null; 
  parent?: markdownRemarkFrontmatterParentQueryString_4 | null; 
  tags?: markdownRemarkFrontmatterTagsQueryList_2 | null; 
  image?: markdownRemarkFrontmatterImageQueryString_2 | null; 
  draft?: markdownRemarkFrontmatterDraftQueryBoolean_2 | null; 
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterCreatedDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterUpdatedDateQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterAuthorQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterTagsQueryList_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
  in?: string[] | null; 
}

export interface markdownRemarkFrontmatterImageQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFrontmatterDraftQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface markdownRemarkFieldsInputObject_2 {
  slug?: markdownRemarkFieldsSlugQueryString_2 | null; 
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface htmlQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface excerptQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null; 
  depth?: headingsListElemDepthQueryInt_3 | null; 
  in?: markdownHeadingInputObject_3[] | null; 
}

export interface headingsListElemValueQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface headingsListElemDepthQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface markdownHeadingInputObject_3 {
  value?: string | null; 
  depth?: number | null; 
}

export interface timeToReadQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface tableOfContentsQueryString_3 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null; 
  sentences?: wordCountSentencesQueryInt_3 | null; 
  words?: wordCountWordsQueryInt_3 | null; 
}

export interface wordCountParagraphsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountSentencesQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface wordCountWordsQueryInt_3 {
  eq?: number | null; 
  ne?: number | null; 
}

export interface authorJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonBioQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonAvatarQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonTwitterQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonGithubQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonInternalInputObject_2 {
  contentDigest?: authorJsonInternalContentDigestQueryString_2 | null; 
  type?: authorJsonInternalTypeQueryString_2 | null; 
  owner?: authorJsonInternalOwnerQueryString_2 | null; 
}

export interface authorJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface authorJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonDisplayNameQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonGithubUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonSpecUrlQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonFaIconQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonTaglineQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonCurrentVersionQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonAvailableQueryBoolean_2 {
  eq?: boolean | null; 
  ne?: boolean | null; 
}

export interface apisJsonIdQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonInternalInputObject_2 {
  contentDigest?: apisJsonInternalContentDigestQueryString_2 | null; 
  type?: apisJsonInternalTypeQueryString_2 | null; 
  owner?: apisJsonInternalOwnerQueryString_2 | null; 
}

export interface apisJsonInternalContentDigestQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonInternalTypeQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}

export interface apisJsonInternalOwnerQueryString_2 {
  eq?: string | null; 
  ne?: string | null; 
  regex?: string | null; 
  glob?: string | null; 
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePageConnectionSort | null; 
  filter?: filterSitePage | null; 
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: sitePluginConnectionSort | null; 
  filter?: filterSitePlugin | null; 
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: directoryConnectionSort | null; 
  filter?: filterDirectory | null; 
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: fileConnectionSort | null; 
  filter?: filterFile | null; 
}
export interface AllImageSharpRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: imageSharpConnectionSort | null; 
  filter?: filterImageSharp | null; 
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: markdownRemarkConnectionSort | null; 
  filter?: filterMarkdownRemark | null; 
}
export interface AllAuthorJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: authorJsonConnectionSort | null; 
  filter?: filterAuthorJson | null; 
}
export interface AllApisJsonRootQueryTypeArgs {
  skip?: number | null; 
  limit?: number | null; 
  sort?: apisJsonConnectionSort | null; 
  filter?: filterApisJson | null; 
}
export interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null; 
  jsonName?: sitePageJsonNameQueryString | null; 
  internalComponentName?: sitePageInternalComponentNameQueryString | null; 
  path?: sitePagePathQueryString_2 | null; 
  component?: sitePageComponentQueryString | null; 
  componentChunkName?: sitePageComponentChunkNameQueryString | null; 
  context?: sitePageContextInputObject | null; 
  updatedAt?: sitePageUpdatedAtQueryInteger | null; 
  pluginCreatorId?: sitePagePluginCreatorIdQueryString | null; 
  componentPath?: sitePageComponentPathQueryString | null; 
  id?: sitePageIdQueryString_2 | null; 
  internal?: sitePageInternalInputObject_2 | null; 
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null; 
  id?: sitePluginIdQueryString_2 | null; 
  name?: sitePluginNameQueryString_2 | null; 
  version?: sitePluginVersionQueryString_2 | null; 
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null; 
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null; 
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null; 
  packageJson?: sitePluginPackageJsonInputObject_2 | null; 
  internal?: sitePluginInternalInputObject_2 | null; 
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null; 
  port?: sitePortQueryString_2 | null; 
  host?: siteHostQueryString_2 | null; 
  mapping?: siteMappingInputObject_2 | null; 
  pathPrefix?: sitePathPrefixQueryString_2 | null; 
  polyfill?: sitePolyfillQueryBoolean_2 | null; 
  buildTime?: siteBuildTimeQueryString_2 | null; 
  id?: siteIdQueryString_2 | null; 
  internal?: siteInternalInputObject_2 | null; 
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null; 
  internal?: directoryInternalInputObject_2 | null; 
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null; 
  absolutePath?: directoryAbsolutePathQueryString_2 | null; 
  relativePath?: directoryRelativePathQueryString_2 | null; 
  extension?: directoryExtensionQueryString_2 | null; 
  size?: directorySizeQueryInteger_2 | null; 
  prettySize?: directoryPrettySizeQueryString_2 | null; 
  modifiedTime?: directoryModifiedTimeQueryString_2 | null; 
  accessTime?: directoryAccessTimeQueryString_2 | null; 
  changeTime?: directoryChangeTimeQueryString_2 | null; 
  birthTime?: directoryBirthTimeQueryString_2 | null; 
  root?: directoryRootQueryString_2 | null; 
  dir?: directoryDirQueryString_2 | null; 
  base?: directoryBaseQueryString_2 | null; 
  ext?: directoryExtQueryString_2 | null; 
  name?: directoryNameQueryString_2 | null; 
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null; 
  dev?: directoryDevQueryInteger_2 | null; 
  mode?: directoryModeQueryInteger_2 | null; 
  nlink?: directoryNlinkQueryInteger_2 | null; 
  uid?: directoryUidQueryInteger_2 | null; 
  gid?: directoryGidQueryInteger_2 | null; 
  rdev?: directoryRdevQueryInteger_2 | null; 
  ino?: directoryInoQueryInteger_2 | null; 
  atime?: directoryAtimeQueryString_2 | null; 
  mtime?: directoryMtimeQueryString_2 | null; 
  ctime?: directoryCtimeQueryString_2 | null; 
  birthtime?: directoryBirthtimeQueryString_2 | null; 
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null; 
  internal?: fileInternalInputObject_2 | null; 
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null; 
  absolutePath?: fileAbsolutePathQueryString_2 | null; 
  relativePath?: fileRelativePathQueryString_2 | null; 
  extension?: fileExtensionQueryString_2 | null; 
  size?: fileSizeQueryInteger_2 | null; 
  prettySize?: filePrettySizeQueryString_2 | null; 
  modifiedTime?: fileModifiedTimeQueryString_2 | null; 
  accessTime?: fileAccessTimeQueryString_2 | null; 
  changeTime?: fileChangeTimeQueryString_2 | null; 
  birthTime?: fileBirthTimeQueryString_2 | null; 
  root?: fileRootQueryString_2 | null; 
  dir?: fileDirQueryString_2 | null; 
  base?: fileBaseQueryString_2 | null; 
  ext?: fileExtQueryString_2 | null; 
  name?: fileNameQueryString_2 | null; 
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null; 
  dev?: fileDevQueryInteger_2 | null; 
  mode?: fileModeQueryInteger_2 | null; 
  nlink?: fileNlinkQueryInteger_2 | null; 
  uid?: fileUidQueryInteger_2 | null; 
  gid?: fileGidQueryInteger_2 | null; 
  rdev?: fileRdevQueryInteger_2 | null; 
  ino?: fileInoQueryInteger_2 | null; 
  atime?: fileAtimeQueryString_2 | null; 
  mtime?: fileMtimeQueryString_2 | null; 
  ctime?: fileCtimeQueryString_2 | null; 
  birthtime?: fileBirthtimeQueryString_2 | null; 
}
export interface ImageSharpRootQueryTypeArgs {
  id?: imageSharpIdQueryString_2 | null; 
  internal?: imageSharpInternalInputObject_2 | null; 
  original?: originalTypeName_3 | null; 
  resolutions?: resolutionsTypeName_3 | null; 
  sizes?: sizesTypeName_3 | null; 
  responsiveResolution?: responsiveResolutionTypeName_3 | null; 
  responsiveSizes?: responsiveSizesTypeName_3 | null; 
  resize?: resizeTypeName_3 | null; 
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null; 
  internal?: markdownRemarkInternalInputObject_2 | null; 
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null; 
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null; 
  fields?: markdownRemarkFieldsInputObject_2 | null; 
  html?: htmlQueryString_3 | null; 
  excerpt?: excerptQueryString_3 | null; 
  headings?: headingsQueryList_3 | null; 
  timeToRead?: timeToReadQueryInt_3 | null; 
  tableOfContents?: tableOfContentsQueryString_3 | null; 
  wordCount?: wordCountTypeName_3 | null; 
}
export interface AuthorJsonRootQueryTypeArgs {
  id?: authorJsonIdQueryString_2 | null; 
  bio?: authorJsonBioQueryString_2 | null; 
  avatar?: authorJsonAvatarQueryString_2 | null; 
  twitter?: authorJsonTwitterQueryString_2 | null; 
  github?: authorJsonGithubQueryString_2 | null; 
  internal?: authorJsonInternalInputObject_2 | null; 
}
export interface ApisJsonRootQueryTypeArgs {
  name?: apisJsonNameQueryString_2 | null; 
  displayName?: apisJsonDisplayNameQueryString_2 | null; 
  githubUrl?: apisJsonGithubUrlQueryString_2 | null; 
  specUrl?: apisJsonSpecUrlQueryString_2 | null; 
  faIcon?: apisJsonFaIconQueryString_2 | null; 
  tagline?: apisJsonTaglineQueryString_2 | null; 
  currentVersion?: apisJsonCurrentVersionQueryString_2 | null; 
  available?: apisJsonAvailableQueryBoolean_2 | null; 
  id?: apisJsonIdQueryString_2 | null; 
  internal?: apisJsonInternalInputObject_2 | null; 
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null; 
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePageGroupEnum | null; 
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null; 
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: sitePluginGroupEnum | null; 
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null; 
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: directoryGroupEnum | null; 
}
export interface ModifiedTimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AtimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface MtimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface CtimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeDirectoryArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null; 
}
export interface GroupFileConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: fileGroupEnum | null; 
}
export interface SizeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ModifiedTimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AccessTimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ChangeTimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthTimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface AtimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface MtimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface CtimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BirthtimeFileArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null; 
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null; 
}
export interface CreatedDateFrontmatter_2Args {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface UpdatedDateFrontmatter_2Args {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface ResolutionsImageSharpArgs {
  width?: number | null; 
  height?: number | null; 
  jpegProgressive?: boolean | null; 
  grayscale?: boolean | null; 
  duotone?: DuotoneGradient | null; 
  traceSVG?: Potrace | null; 
  quality?: number | null; 
  toFormat?: ImageFormat | null; 
  cropFocus?: ImageCropFocus | null; 
  rotate?: number | null; 
}
export interface SizesImageSharpArgs {
  maxWidth?: number | null; 
  maxHeight?: number | null; 
  grayscale?: boolean | null; 
  jpegProgressive?: boolean | null; 
  duotone?: DuotoneGradient | null; 
  traceSVG?: Potrace | null; 
  quality?: number | null; 
  toFormat?: ImageFormat | null; 
  cropFocus?: ImageCropFocus | null; 
  rotate?: number | null; 
}
export interface ResponsiveResolutionImageSharpArgs {
  width?: number | null; 
  height?: number | null; 
  jpegProgressive?: boolean | null; 
  grayscale?: boolean | null; 
  duotone?: DuotoneGradient | null; 
  quality?: number | null; 
  toFormat?: ImageFormat | null; 
  cropFocus?: ImageCropFocus | null; 
  rotate?: number | null; 
}
export interface ResponsiveSizesImageSharpArgs {
  maxWidth?: number | null; 
  maxHeight?: number | null; 
  grayscale?: boolean | null; 
  jpegProgressive?: boolean | null; 
  duotone?: DuotoneGradient | null; 
  quality?: number | null; 
  toFormat?: ImageFormat | null; 
  cropFocus?: ImageCropFocus | null; 
  rotate?: number | null; 
}
export interface ResizeImageSharpArgs {
  width?: number | null; 
  height?: number | null; 
  quality?: number | null; 
  jpegProgressive?: boolean | null; 
  pngCompressionLevel?: number | null; 
  grayscale?: boolean | null; 
  duotone?: DuotoneGradient | null; 
  base64?: boolean | null; 
  traceSVG?: Potrace | null; 
  toFormat?: ImageFormat | null; 
  cropFocus?: ImageCropFocus | null; 
  rotate?: number | null; 
}
export interface DistinctImageSharpConnectionArgs {
  field?: imageSharpDistinctEnum | null; 
}
export interface GroupImageSharpConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: imageSharpGroupEnum | null; 
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null; 
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: markdownRemarkGroupEnum | null; 
}
export interface DistinctAuthorJsonConnectionArgs {
  field?: authorJsonDistinctEnum | null; 
}
export interface GroupAuthorJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: authorJsonGroupEnum | null; 
}
export interface DistinctApisJsonConnectionArgs {
  field?: apisJsonDistinctEnum | null; 
}
export interface GroupApisJsonConnectionArgs {
  skip?: number | null; 
  limit?: number | null; 
  field?: apisJsonGroupEnum | null; 
}
export interface PortSiteArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}
export interface BuildTimeSiteArgs {
  formatString?: string | null; 
  fromNow?: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  locale?: string | null; /* Configures the locale Moment.js will use to format the date. */
}

export type SitePageConnectionSortByFieldsEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "matchPath" | "component" | "componentChunkName" | "context___slug" | "context___api___name" | "context___api___displayName" | "context___api___specUrl" | "context___api___faIcon" | "context___api___tagline" | "context___api___currentVersion" | "context___api___available" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageConnectionSortOrderValues = "ASC" | "DESC";


export type sitePageDistinctEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___slug" | "context___api___name" | "context___api___displayName" | "context___api___specUrl" | "context___api___faIcon" | "context___api___tagline" | "context___api___currentVersion" | "context___api___available" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageGroupEnum = "layout" | "jsonName" | "internalComponentName" | "path" | "component" | "componentChunkName" | "context___slug" | "context___api___name" | "context___api___displayName" | "context___api___specUrl" | "context___api___faIcon" | "context___api___tagline" | "context___api___currentVersion" | "context___api___available" | "context___tag" | "context___skip" | "updatedAt" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___postCssPlugins" | "pluginOptions___precision" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";


export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___precision" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___backgroundColor" | "pluginOptions___short_name" | "pluginOptions___start_url" | "pluginOptions___background_color" | "pluginOptions___theme_color" | "pluginOptions___display" | "pluginOptions___precision" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type DirectoryConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type directoryConnectionSortOrderValues = "ASC" | "DESC";


export type directoryDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type directoryGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileConnectionSortOrderValues = "ASC" | "DESC";


export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


export type PotraceTurnPolicy = "TURNPOLICY_BLACK" | "TURNPOLICY_WHITE" | "TURNPOLICY_LEFT" | "TURNPOLICY_RIGHT" | "TURNPOLICY_MINORITY" | "TURNPOLICY_MAJORITY";


export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";


export type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";


export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atime" | "mtime" | "ctime" | "birthtime";


export type ImageSharpConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "original___width" | "original___height" | "original___src" | "resolutions___base64" | "resolutions___tracedSVG" | "resolutions___aspectRatio" | "resolutions___width" | "resolutions___height" | "resolutions___src" | "resolutions___srcSet" | "resolutions___srcWebp" | "resolutions___srcSetWebp" | "resolutions___originalName" | "sizes___base64" | "sizes___tracedSVG" | "sizes___aspectRatio" | "sizes___src" | "sizes___srcSet" | "sizes___srcWebp" | "sizes___srcSetWebp" | "sizes___sizes" | "sizes___originalImg" | "sizes___originalName" | "responsiveResolution___base64" | "responsiveResolution___aspectRatio" | "responsiveResolution___width" | "responsiveResolution___height" | "responsiveResolution___src" | "responsiveResolution___srcSet" | "responsiveResolution___originalName" | "responsiveSizes___base64" | "responsiveSizes___aspectRatio" | "responsiveSizes___src" | "responsiveSizes___srcSet" | "responsiveSizes___sizes" | "responsiveSizes___originalImg" | "responsiveSizes___originalName" | "resize___src" | "resize___tracedSVG" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName";


export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";


export type imageSharpDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type imageSharpGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "fileAbsolutePath" | "fields___slug" | "html" | "excerpt" | "headings" | "timeToRead" | "tableOfContents" | "wordCount___paragraphs" | "wordCount___sentences" | "wordCount___words";


export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";


export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "fileAbsolutePath" | "fields___slug";


export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___createdDate" | "frontmatter___updatedDate" | "frontmatter___author" | "frontmatter____PARENT" | "frontmatter___parent" | "frontmatter___tags" | "frontmatter___image" | "frontmatter___draft" | "fileAbsolutePath" | "fields___slug";


export type AuthorJsonConnectionSortByFieldsEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type authorJsonConnectionSortOrderValues = "ASC" | "DESC";


export type authorJsonDistinctEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type authorJsonGroupEnum = "id" | "bio" | "avatar" | "twitter" | "github" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type ApisJsonConnectionSortByFieldsEnum = "name" | "displayName" | "githubUrl" | "specUrl" | "faIcon" | "tagline" | "currentVersion" | "available" | "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type apisJsonConnectionSortOrderValues = "ASC" | "DESC";


export type apisJsonDistinctEnum = "name" | "displayName" | "githubUrl" | "specUrl" | "faIcon" | "tagline" | "currentVersion" | "available" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type apisJsonGroupEnum = "name" | "displayName" | "githubUrl" | "specUrl" | "faIcon" | "tagline" | "currentVersion" | "available" | "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";

