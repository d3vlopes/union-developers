/* eslint-disable */
import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename'
        ? T[P]
        : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  Hex: { input: any; output: any }
  Json: { input: any; output: any }
  Long: { input: any; output: any }
  RGBAHue: { input: any; output: any }
  RGBATransparency: { input: any; output: any }
  RichTextAST: { input: any; output: any }
}

/** Seção sobre da landing page. */
export type AboutSection = {
  __typename?: 'AboutSection'
  description: RichText
  heading: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
}

export type AboutSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AboutSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type AboutSectionConnection = {
  __typename?: 'AboutSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AboutSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AboutSectionCreateInput = {
  description: Scalars['RichTextAST']['input']
  heading: Scalars['String']['input']
  sectionId: Scalars['String']['input']
}

export type AboutSectionCreateManyInlineInput = {
  /** Create and connect multiple existing AboutSection documents */
  create?: InputMaybe<Array<AboutSectionCreateInput>>
}

export type AboutSectionCreateOneInlineInput = {
  /** Create and connect one AboutSection document */
  create?: InputMaybe<AboutSectionCreateInput>
}

export type AboutSectionCreateWithPositionInput = {
  /** Document to create */
  data: AboutSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type AboutSectionEdge = {
  __typename?: 'AboutSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: AboutSection
}

/** Identifies documents */
export type AboutSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum AboutSectionOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type AboutSectionParent = Page

export type AboutSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type AboutSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type AboutSectionParentCreateManyInlineInput = {
  /** Connect multiple existing AboutSectionParent documents */
  connect?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>
  /** Create and connect multiple existing AboutSectionParent documents */
  create?: InputMaybe<Array<AboutSectionParentCreateInput>>
}

export type AboutSectionParentCreateOneInlineInput = {
  /** Connect one existing AboutSectionParent document */
  connect?: InputMaybe<AboutSectionParentWhereUniqueInput>
  /** Create and connect one AboutSectionParent document */
  create?: InputMaybe<AboutSectionParentCreateInput>
}

export type AboutSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type AboutSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing AboutSectionParent documents */
  connect?: InputMaybe<Array<AboutSectionParentConnectInput>>
  /** Create and connect multiple AboutSectionParent documents */
  create?: InputMaybe<Array<AboutSectionParentCreateInput>>
  /** Delete multiple AboutSectionParent documents */
  delete?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>
  /** Disconnect multiple AboutSectionParent documents */
  disconnect?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing AboutSectionParent documents */
  set?: InputMaybe<Array<AboutSectionParentWhereUniqueInput>>
  /** Update multiple AboutSectionParent documents */
  update?: InputMaybe<
    Array<AboutSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple AboutSectionParent documents */
  upsert?: InputMaybe<
    Array<AboutSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type AboutSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type AboutSectionParentUpdateOneInlineInput = {
  /** Connect existing AboutSectionParent document */
  connect?: InputMaybe<AboutSectionParentWhereUniqueInput>
  /** Create and connect one AboutSectionParent document */
  create?: InputMaybe<AboutSectionParentCreateInput>
  /** Delete currently connected AboutSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected AboutSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single AboutSectionParent document */
  update?: InputMaybe<AboutSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single AboutSectionParent document */
  upsert?: InputMaybe<AboutSectionParentUpsertWithNestedWhereUniqueInput>
}

export type AboutSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type AboutSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type AboutSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type AboutSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type AboutSectionUpdateInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type AboutSectionUpdateManyInlineInput = {
  /** Create and connect multiple AboutSection component instances */
  create?: InputMaybe<Array<AboutSectionCreateWithPositionInput>>
  /** Delete multiple AboutSection documents */
  delete?: InputMaybe<Array<AboutSectionWhereUniqueInput>>
  /** Update multiple AboutSection component instances */
  update?: InputMaybe<
    Array<AboutSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple AboutSection component instances */
  upsert?: InputMaybe<
    Array<AboutSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type AboutSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['RichTextAST']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type AboutSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutSectionUpdateManyInput
  /** Document search */
  where: AboutSectionWhereInput
}

export type AboutSectionUpdateOneInlineInput = {
  /** Create and connect one AboutSection document */
  create?: InputMaybe<AboutSectionCreateInput>
  /** Delete currently connected AboutSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single AboutSection document */
  update?: InputMaybe<AboutSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single AboutSection document */
  upsert?: InputMaybe<AboutSectionUpsertWithNestedWhereUniqueInput>
}

export type AboutSectionUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<AboutSectionUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: AboutSectionWhereUniqueInput
  }

export type AboutSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutSectionUpdateInput
  /** Unique document search */
  where: AboutSectionWhereUniqueInput
}

export type AboutSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutSectionCreateInput
  /** Update document if it exists */
  update: AboutSectionUpdateInput
}

export type AboutSectionUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<AboutSectionUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: AboutSectionWhereUniqueInput
  }

export type AboutSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutSectionUpsertInput
  /** Unique document search */
  where: AboutSectionWhereUniqueInput
}

/** Identifies documents */
export type AboutSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References AboutSection record uniquely */
export type AboutSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']['output']
}

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Descreva  a imagem detalhadamente */
  description?: Maybe<Scalars['String']['output']>
  /** Get the document in other stages */
  documentInStages: Array<Asset>
  /** The file name */
  fileName: Scalars['String']['output']
  /** The file handle */
  handle: Scalars['String']['output']
  /** The height of the file */
  height?: Maybe<Scalars['Float']['output']>
  /** List of Asset versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** System Locale field */
  locale: Locale
  /** Get the other localizations for this document */
  localizations: Array<Asset>
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']['output']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  scheduledIn: Array<ScheduledOperation>
  /** The file size */
  size?: Maybe<Scalars['Float']['output']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String']['output']
  /** The file width */
  width?: Maybe<Scalars['Float']['output']>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  backgroundDesktopHero?: InputMaybe<HeroCreateManyInlineInput>
  backgroundMobileHero?: InputMaybe<HeroCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  iconHighlight?: InputMaybe<HighlightCreateManyInlineInput>
  iconSocialLink?: InputMaybe<SocialLinkCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  logoFooter?: InputMaybe<FooterCreateManyInlineInput>
  logoHeader?: InputMaybe<HeaderCreateManyInlineInput>
  logoHero?: InputMaybe<HeroCreateManyInlineInput>
  logoRememberActionSection?: InputMaybe<RememberActionSectionCreateManyInlineInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName: Scalars['String']['input']
  handle: Scalars['String']['input']
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>
}

export type AssetUpdateInput = {
  backgroundDesktopHero?: InputMaybe<HeroUpdateManyInlineInput>
  backgroundMobileHero?: InputMaybe<HeroUpdateManyInlineInput>
  description?: InputMaybe<Scalars['String']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  iconHighlight?: InputMaybe<HighlightUpdateManyInlineInput>
  iconSocialLink?: InputMaybe<SocialLinkUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  logoFooter?: InputMaybe<FooterUpdateManyInlineInput>
  logoHeader?: InputMaybe<HeaderUpdateManyInlineInput>
  logoHero?: InputMaybe<HeroUpdateManyInlineInput>
  logoRememberActionSection?: InputMaybe<RememberActionSectionUpdateManyInlineInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  size?: InputMaybe<Scalars['Float']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
  width?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output']
}

export type BenefitSection = {
  __typename?: 'BenefitSection'
  description: Scalars['String']['output']
  heading: Scalars['String']['output']
  highlights: Array<Highlight>
  /** The unique identifier */
  id: Scalars['ID']['output']
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
}

export type BenefitSectionHighlightsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<HighlightOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<HighlightWhereInput>
}

export type BenefitSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: BenefitSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type BenefitSectionConnection = {
  __typename?: 'BenefitSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<BenefitSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type BenefitSectionCreateInput = {
  description: Scalars['String']['input']
  heading: Scalars['String']['input']
  highlights?: InputMaybe<HighlightCreateManyInlineInput>
  sectionId: Scalars['String']['input']
}

export type BenefitSectionCreateManyInlineInput = {
  /** Create and connect multiple existing BenefitSection documents */
  create?: InputMaybe<Array<BenefitSectionCreateInput>>
}

export type BenefitSectionCreateOneInlineInput = {
  /** Create and connect one BenefitSection document */
  create?: InputMaybe<BenefitSectionCreateInput>
}

export type BenefitSectionCreateWithPositionInput = {
  /** Document to create */
  data: BenefitSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type BenefitSectionEdge = {
  __typename?: 'BenefitSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: BenefitSection
}

/** Identifies documents */
export type BenefitSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  highlights_every?: InputMaybe<HighlightWhereInput>
  highlights_none?: InputMaybe<HighlightWhereInput>
  highlights_some?: InputMaybe<HighlightWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum BenefitSectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type BenefitSectionParent = Page

export type BenefitSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type BenefitSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type BenefitSectionParentCreateManyInlineInput = {
  /** Connect multiple existing BenefitSectionParent documents */
  connect?: InputMaybe<Array<BenefitSectionParentWhereUniqueInput>>
  /** Create and connect multiple existing BenefitSectionParent documents */
  create?: InputMaybe<Array<BenefitSectionParentCreateInput>>
}

export type BenefitSectionParentCreateOneInlineInput = {
  /** Connect one existing BenefitSectionParent document */
  connect?: InputMaybe<BenefitSectionParentWhereUniqueInput>
  /** Create and connect one BenefitSectionParent document */
  create?: InputMaybe<BenefitSectionParentCreateInput>
}

export type BenefitSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type BenefitSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing BenefitSectionParent documents */
  connect?: InputMaybe<Array<BenefitSectionParentConnectInput>>
  /** Create and connect multiple BenefitSectionParent documents */
  create?: InputMaybe<Array<BenefitSectionParentCreateInput>>
  /** Delete multiple BenefitSectionParent documents */
  delete?: InputMaybe<Array<BenefitSectionParentWhereUniqueInput>>
  /** Disconnect multiple BenefitSectionParent documents */
  disconnect?: InputMaybe<Array<BenefitSectionParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing BenefitSectionParent documents */
  set?: InputMaybe<Array<BenefitSectionParentWhereUniqueInput>>
  /** Update multiple BenefitSectionParent documents */
  update?: InputMaybe<
    Array<BenefitSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple BenefitSectionParent documents */
  upsert?: InputMaybe<
    Array<BenefitSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type BenefitSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type BenefitSectionParentUpdateOneInlineInput = {
  /** Connect existing BenefitSectionParent document */
  connect?: InputMaybe<BenefitSectionParentWhereUniqueInput>
  /** Create and connect one BenefitSectionParent document */
  create?: InputMaybe<BenefitSectionParentCreateInput>
  /** Delete currently connected BenefitSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected BenefitSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single BenefitSectionParent document */
  update?: InputMaybe<BenefitSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single BenefitSectionParent document */
  upsert?: InputMaybe<BenefitSectionParentUpsertWithNestedWhereUniqueInput>
}

export type BenefitSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type BenefitSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type BenefitSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type BenefitSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type BenefitSectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  highlights?: InputMaybe<HighlightUpdateManyInlineInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type BenefitSectionUpdateManyInlineInput = {
  /** Create and connect multiple BenefitSection component instances */
  create?: InputMaybe<Array<BenefitSectionCreateWithPositionInput>>
  /** Delete multiple BenefitSection documents */
  delete?: InputMaybe<Array<BenefitSectionWhereUniqueInput>>
  /** Update multiple BenefitSection component instances */
  update?: InputMaybe<
    Array<BenefitSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple BenefitSection component instances */
  upsert?: InputMaybe<
    Array<BenefitSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type BenefitSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type BenefitSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BenefitSectionUpdateManyInput
  /** Document search */
  where: BenefitSectionWhereInput
}

export type BenefitSectionUpdateOneInlineInput = {
  /** Create and connect one BenefitSection document */
  create?: InputMaybe<BenefitSectionCreateInput>
  /** Delete currently connected BenefitSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single BenefitSection document */
  update?: InputMaybe<BenefitSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single BenefitSection document */
  upsert?: InputMaybe<BenefitSectionUpsertWithNestedWhereUniqueInput>
}

export type BenefitSectionUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<BenefitSectionUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: BenefitSectionWhereUniqueInput
  }

export type BenefitSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BenefitSectionUpdateInput
  /** Unique document search */
  where: BenefitSectionWhereUniqueInput
}

export type BenefitSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: BenefitSectionCreateInput
  /** Update document if it exists */
  update: BenefitSectionUpdateInput
}

export type BenefitSectionUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<BenefitSectionUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: BenefitSectionWhereUniqueInput
  }

export type BenefitSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BenefitSectionUpsertInput
  /** Unique document search */
  where: BenefitSectionWhereUniqueInput
}

/** Identifies documents */
export type BenefitSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BenefitSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  highlights_every?: InputMaybe<HighlightWhereInput>
  highlights_none?: InputMaybe<HighlightWhereInput>
  highlights_some?: InputMaybe<HighlightWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References BenefitSection record uniquely */
export type BenefitSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']['output']
  hex: Scalars['Hex']['output']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DevelopmentSide {
  Backend = 'backend',
  Frontend = 'frontend',
}

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx',
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']['output']
  data?: Maybe<Scalars['Json']['output']>
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type FaqSection = {
  __typename?: 'FaqSection'
  heading: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  questions: Array<Question>
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
}

export type FaqSectionQuestionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<QuestionOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<QuestionWhereInput>
}

export type FaqSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: FaqSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type FaqSectionConnection = {
  __typename?: 'FaqSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<FaqSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type FaqSectionCreateInput = {
  heading: Scalars['String']['input']
  questions?: InputMaybe<QuestionCreateManyInlineInput>
  sectionId: Scalars['String']['input']
}

export type FaqSectionCreateManyInlineInput = {
  /** Create and connect multiple existing FaqSection documents */
  create?: InputMaybe<Array<FaqSectionCreateInput>>
}

export type FaqSectionCreateOneInlineInput = {
  /** Create and connect one FaqSection document */
  create?: InputMaybe<FaqSectionCreateInput>
}

export type FaqSectionCreateWithPositionInput = {
  /** Document to create */
  data: FaqSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type FaqSectionEdge = {
  __typename?: 'FaqSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: FaqSection
}

/** Identifies documents */
export type FaqSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  questions_every?: InputMaybe<QuestionWhereInput>
  questions_none?: InputMaybe<QuestionWhereInput>
  questions_some?: InputMaybe<QuestionWhereInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum FaqSectionOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type FaqSectionParent = Page

export type FaqSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type FaqSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type FaqSectionParentCreateManyInlineInput = {
  /** Connect multiple existing FaqSectionParent documents */
  connect?: InputMaybe<Array<FaqSectionParentWhereUniqueInput>>
  /** Create and connect multiple existing FaqSectionParent documents */
  create?: InputMaybe<Array<FaqSectionParentCreateInput>>
}

export type FaqSectionParentCreateOneInlineInput = {
  /** Connect one existing FaqSectionParent document */
  connect?: InputMaybe<FaqSectionParentWhereUniqueInput>
  /** Create and connect one FaqSectionParent document */
  create?: InputMaybe<FaqSectionParentCreateInput>
}

export type FaqSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type FaqSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing FaqSectionParent documents */
  connect?: InputMaybe<Array<FaqSectionParentConnectInput>>
  /** Create and connect multiple FaqSectionParent documents */
  create?: InputMaybe<Array<FaqSectionParentCreateInput>>
  /** Delete multiple FaqSectionParent documents */
  delete?: InputMaybe<Array<FaqSectionParentWhereUniqueInput>>
  /** Disconnect multiple FaqSectionParent documents */
  disconnect?: InputMaybe<Array<FaqSectionParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing FaqSectionParent documents */
  set?: InputMaybe<Array<FaqSectionParentWhereUniqueInput>>
  /** Update multiple FaqSectionParent documents */
  update?: InputMaybe<
    Array<FaqSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple FaqSectionParent documents */
  upsert?: InputMaybe<
    Array<FaqSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type FaqSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type FaqSectionParentUpdateOneInlineInput = {
  /** Connect existing FaqSectionParent document */
  connect?: InputMaybe<FaqSectionParentWhereUniqueInput>
  /** Create and connect one FaqSectionParent document */
  create?: InputMaybe<FaqSectionParentCreateInput>
  /** Delete currently connected FaqSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected FaqSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single FaqSectionParent document */
  update?: InputMaybe<FaqSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single FaqSectionParent document */
  upsert?: InputMaybe<FaqSectionParentUpsertWithNestedWhereUniqueInput>
}

export type FaqSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type FaqSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type FaqSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type FaqSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type FaqSectionUpdateInput = {
  heading?: InputMaybe<Scalars['String']['input']>
  questions?: InputMaybe<QuestionUpdateManyInlineInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type FaqSectionUpdateManyInlineInput = {
  /** Create and connect multiple FaqSection component instances */
  create?: InputMaybe<Array<FaqSectionCreateWithPositionInput>>
  /** Delete multiple FaqSection documents */
  delete?: InputMaybe<Array<FaqSectionWhereUniqueInput>>
  /** Update multiple FaqSection component instances */
  update?: InputMaybe<
    Array<FaqSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple FaqSection component instances */
  upsert?: InputMaybe<
    Array<FaqSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type FaqSectionUpdateManyInput = {
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type FaqSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqSectionUpdateManyInput
  /** Document search */
  where: FaqSectionWhereInput
}

export type FaqSectionUpdateOneInlineInput = {
  /** Create and connect one FaqSection document */
  create?: InputMaybe<FaqSectionCreateInput>
  /** Delete currently connected FaqSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single FaqSection document */
  update?: InputMaybe<FaqSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single FaqSection document */
  upsert?: InputMaybe<FaqSectionUpsertWithNestedWhereUniqueInput>
}

export type FaqSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FaqSectionUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: FaqSectionWhereUniqueInput
}

export type FaqSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqSectionUpdateInput
  /** Unique document search */
  where: FaqSectionWhereUniqueInput
}

export type FaqSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqSectionCreateInput
  /** Update document if it exists */
  update: FaqSectionUpdateInput
}

export type FaqSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FaqSectionUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: FaqSectionWhereUniqueInput
}

export type FaqSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqSectionUpsertInput
  /** Unique document search */
  where: FaqSectionWhereUniqueInput
}

/** Identifies documents */
export type FaqSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  questions_every?: InputMaybe<QuestionWhereInput>
  questions_none?: InputMaybe<QuestionWhereInput>
  questions_some?: InputMaybe<QuestionWhereInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References FaqSection record uniquely */
export type FaqSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Footer = {
  __typename?: 'Footer'
  companyName: Scalars['String']['output']
  companySlogan: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  logo: Asset
  navigationMenuLinks: Array<NavigationMenuLink>
  socialLinks: Array<SocialLink>
  /** System stage field */
  stage: Stage
}

export type FooterLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type FooterNavigationMenuLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<NavigationMenuLinkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavigationMenuLinkWhereInput>
}

export type FooterSocialLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<SocialLinkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SocialLinkWhereInput>
}

export type FooterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: FooterWhereUniqueInput
}

/** A connection to a list of items. */
export type FooterConnection = {
  __typename?: 'FooterConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<FooterEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type FooterCreateInput = {
  companyName: Scalars['String']['input']
  companySlogan: Scalars['String']['input']
  logo: AssetCreateOneInlineInput
  navigationMenuLinks?: InputMaybe<NavigationMenuLinkCreateManyInlineInput>
  socialLinks?: InputMaybe<SocialLinkCreateManyInlineInput>
}

export type FooterCreateManyInlineInput = {
  /** Create and connect multiple existing Footer documents */
  create?: InputMaybe<Array<FooterCreateInput>>
}

export type FooterCreateOneInlineInput = {
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>
}

export type FooterCreateWithPositionInput = {
  /** Document to create */
  data: FooterCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type FooterEdge = {
  __typename?: 'FooterEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Footer
}

/** Identifies documents */
export type FooterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']['input']>
  companySlogan?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companySlogan_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companySlogan_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companySlogan_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  companySlogan_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companySlogan_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companySlogan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companySlogan_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  companySlogan_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  companySlogan_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  navigationMenuLinks_every?: InputMaybe<NavigationMenuLinkWhereInput>
  navigationMenuLinks_none?: InputMaybe<NavigationMenuLinkWhereInput>
  navigationMenuLinks_some?: InputMaybe<NavigationMenuLinkWhereInput>
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>
}

export enum FooterOrderByInput {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CompanySloganAsc = 'companySlogan_ASC',
  CompanySloganDesc = 'companySlogan_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export type FooterParent = Page

export type FooterParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type FooterParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type FooterParentCreateManyInlineInput = {
  /** Connect multiple existing FooterParent documents */
  connect?: InputMaybe<Array<FooterParentWhereUniqueInput>>
  /** Create and connect multiple existing FooterParent documents */
  create?: InputMaybe<Array<FooterParentCreateInput>>
}

export type FooterParentCreateOneInlineInput = {
  /** Connect one existing FooterParent document */
  connect?: InputMaybe<FooterParentWhereUniqueInput>
  /** Create and connect one FooterParent document */
  create?: InputMaybe<FooterParentCreateInput>
}

export type FooterParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type FooterParentUpdateManyInlineInput = {
  /** Connect multiple existing FooterParent documents */
  connect?: InputMaybe<Array<FooterParentConnectInput>>
  /** Create and connect multiple FooterParent documents */
  create?: InputMaybe<Array<FooterParentCreateInput>>
  /** Delete multiple FooterParent documents */
  delete?: InputMaybe<Array<FooterParentWhereUniqueInput>>
  /** Disconnect multiple FooterParent documents */
  disconnect?: InputMaybe<Array<FooterParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing FooterParent documents */
  set?: InputMaybe<Array<FooterParentWhereUniqueInput>>
  /** Update multiple FooterParent documents */
  update?: InputMaybe<
    Array<FooterParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple FooterParent documents */
  upsert?: InputMaybe<
    Array<FooterParentUpsertWithNestedWhereUniqueInput>
  >
}

export type FooterParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type FooterParentUpdateOneInlineInput = {
  /** Connect existing FooterParent document */
  connect?: InputMaybe<FooterParentWhereUniqueInput>
  /** Create and connect one FooterParent document */
  create?: InputMaybe<FooterParentCreateInput>
  /** Delete currently connected FooterParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected FooterParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single FooterParent document */
  update?: InputMaybe<FooterParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single FooterParent document */
  upsert?: InputMaybe<FooterParentUpsertWithNestedWhereUniqueInput>
}

export type FooterParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type FooterParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type FooterParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type FooterParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type FooterUpdateInput = {
  companyName?: InputMaybe<Scalars['String']['input']>
  companySlogan?: InputMaybe<Scalars['String']['input']>
  logo?: InputMaybe<AssetUpdateOneInlineInput>
  navigationMenuLinks?: InputMaybe<NavigationMenuLinkUpdateManyInlineInput>
  socialLinks?: InputMaybe<SocialLinkUpdateManyInlineInput>
}

export type FooterUpdateManyInlineInput = {
  /** Create and connect multiple Footer component instances */
  create?: InputMaybe<Array<FooterCreateWithPositionInput>>
  /** Delete multiple Footer documents */
  delete?: InputMaybe<Array<FooterWhereUniqueInput>>
  /** Update multiple Footer component instances */
  update?: InputMaybe<
    Array<FooterUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Footer component instances */
  upsert?: InputMaybe<
    Array<FooterUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type FooterUpdateManyInput = {
  companyName?: InputMaybe<Scalars['String']['input']>
  companySlogan?: InputMaybe<Scalars['String']['input']>
}

export type FooterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FooterUpdateManyInput
  /** Document search */
  where: FooterWhereInput
}

export type FooterUpdateOneInlineInput = {
  /** Create and connect one Footer document */
  create?: InputMaybe<FooterCreateInput>
  /** Delete currently connected Footer document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Footer document */
  update?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>
  /** Upsert single Footer document */
  upsert?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>
}

export type FooterUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FooterUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: FooterWhereUniqueInput
}

export type FooterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FooterUpdateInput
  /** Unique document search */
  where: FooterWhereUniqueInput
}

export type FooterUpsertInput = {
  /** Create document if it didn't exist */
  create: FooterCreateInput
  /** Update document if it exists */
  update: FooterUpdateInput
}

export type FooterUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FooterUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: FooterWhereUniqueInput
}

export type FooterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FooterUpsertInput
  /** Unique document search */
  where: FooterWhereUniqueInput
}

/** Identifies documents */
export type FooterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FooterWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FooterWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FooterWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']['input']>
  companySlogan?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companySlogan_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companySlogan_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companySlogan_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  companySlogan_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companySlogan_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companySlogan_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companySlogan_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  companySlogan_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  companySlogan_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  navigationMenuLinks_every?: InputMaybe<NavigationMenuLinkWhereInput>
  navigationMenuLinks_none?: InputMaybe<NavigationMenuLinkWhereInput>
  navigationMenuLinks_some?: InputMaybe<NavigationMenuLinkWhereInput>
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>
}

/** References Footer record uniquely */
export type FooterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Header = {
  __typename?: 'Header'
  /** Alvo do botão, ao clicar para onde vai enviar? */
  buttonTarget: Scalars['String']['output']
  /** Texto do botão do cabeçalho */
  buttonText: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  logo: Asset
  /** Links de navegação do cabeçalho */
  navigationLinks: Array<NavigationItem>
  /** System stage field */
  stage: Stage
}

export type HeaderLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HeaderNavigationLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<NavigationItemOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavigationItemWhereInput>
}

export type HeaderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HeaderWhereUniqueInput
}

/** A connection to a list of items. */
export type HeaderConnection = {
  __typename?: 'HeaderConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HeaderEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HeaderCreateInput = {
  buttonTarget: Scalars['String']['input']
  buttonText: Scalars['String']['input']
  logo: AssetCreateOneInlineInput
  navigationLinks?: InputMaybe<NavigationItemCreateManyInlineInput>
}

export type HeaderCreateManyInlineInput = {
  /** Create and connect multiple existing Header documents */
  create?: InputMaybe<Array<HeaderCreateInput>>
}

export type HeaderCreateOneInlineInput = {
  /** Create and connect one Header document */
  create?: InputMaybe<HeaderCreateInput>
}

export type HeaderCreateWithPositionInput = {
  /** Document to create */
  data: HeaderCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type HeaderEdge = {
  __typename?: 'HeaderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Header
}

/** Identifies documents */
export type HeaderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeaderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeaderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeaderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  navigationLinks_every?: InputMaybe<NavigationItemWhereInput>
  navigationLinks_none?: InputMaybe<NavigationItemWhereInput>
  navigationLinks_some?: InputMaybe<NavigationItemWhereInput>
}

export enum HeaderOrderByInput {
  ButtonTargetAsc = 'buttonTarget_ASC',
  ButtonTargetDesc = 'buttonTarget_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
}

export type HeaderParent = Page

export type HeaderParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type HeaderParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type HeaderParentCreateManyInlineInput = {
  /** Connect multiple existing HeaderParent documents */
  connect?: InputMaybe<Array<HeaderParentWhereUniqueInput>>
  /** Create and connect multiple existing HeaderParent documents */
  create?: InputMaybe<Array<HeaderParentCreateInput>>
}

export type HeaderParentCreateOneInlineInput = {
  /** Connect one existing HeaderParent document */
  connect?: InputMaybe<HeaderParentWhereUniqueInput>
  /** Create and connect one HeaderParent document */
  create?: InputMaybe<HeaderParentCreateInput>
}

export type HeaderParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type HeaderParentUpdateManyInlineInput = {
  /** Connect multiple existing HeaderParent documents */
  connect?: InputMaybe<Array<HeaderParentConnectInput>>
  /** Create and connect multiple HeaderParent documents */
  create?: InputMaybe<Array<HeaderParentCreateInput>>
  /** Delete multiple HeaderParent documents */
  delete?: InputMaybe<Array<HeaderParentWhereUniqueInput>>
  /** Disconnect multiple HeaderParent documents */
  disconnect?: InputMaybe<Array<HeaderParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing HeaderParent documents */
  set?: InputMaybe<Array<HeaderParentWhereUniqueInput>>
  /** Update multiple HeaderParent documents */
  update?: InputMaybe<
    Array<HeaderParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple HeaderParent documents */
  upsert?: InputMaybe<
    Array<HeaderParentUpsertWithNestedWhereUniqueInput>
  >
}

export type HeaderParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type HeaderParentUpdateOneInlineInput = {
  /** Connect existing HeaderParent document */
  connect?: InputMaybe<HeaderParentWhereUniqueInput>
  /** Create and connect one HeaderParent document */
  create?: InputMaybe<HeaderParentCreateInput>
  /** Delete currently connected HeaderParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected HeaderParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single HeaderParent document */
  update?: InputMaybe<HeaderParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single HeaderParent document */
  upsert?: InputMaybe<HeaderParentUpsertWithNestedWhereUniqueInput>
}

export type HeaderParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type HeaderParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type HeaderParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type HeaderParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type HeaderUpdateInput = {
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  logo?: InputMaybe<AssetUpdateOneInlineInput>
  navigationLinks?: InputMaybe<NavigationItemUpdateManyInlineInput>
}

export type HeaderUpdateManyInlineInput = {
  /** Create and connect multiple Header component instances */
  create?: InputMaybe<Array<HeaderCreateWithPositionInput>>
  /** Delete multiple Header documents */
  delete?: InputMaybe<Array<HeaderWhereUniqueInput>>
  /** Update multiple Header component instances */
  update?: InputMaybe<
    Array<HeaderUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Header component instances */
  upsert?: InputMaybe<
    Array<HeaderUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type HeaderUpdateManyInput = {
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
}

export type HeaderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeaderUpdateManyInput
  /** Document search */
  where: HeaderWhereInput
}

export type HeaderUpdateOneInlineInput = {
  /** Create and connect one Header document */
  create?: InputMaybe<HeaderCreateInput>
  /** Delete currently connected Header document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Header document */
  update?: InputMaybe<HeaderUpdateWithNestedWhereUniqueInput>
  /** Upsert single Header document */
  upsert?: InputMaybe<HeaderUpsertWithNestedWhereUniqueInput>
}

export type HeaderUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeaderUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HeaderWhereUniqueInput
}

export type HeaderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeaderUpdateInput
  /** Unique document search */
  where: HeaderWhereUniqueInput
}

export type HeaderUpsertInput = {
  /** Create document if it didn't exist */
  create: HeaderCreateInput
  /** Update document if it exists */
  update: HeaderUpdateInput
}

export type HeaderUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeaderUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HeaderWhereUniqueInput
}

export type HeaderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeaderUpsertInput
  /** Unique document search */
  where: HeaderWhereUniqueInput
}

/** Identifies documents */
export type HeaderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeaderWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeaderWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeaderWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  navigationLinks_every?: InputMaybe<NavigationItemWhereInput>
  navigationLinks_none?: InputMaybe<NavigationItemWhereInput>
  navigationLinks_some?: InputMaybe<NavigationItemWhereInput>
}

/** References Header record uniquely */
export type HeaderWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Seção inicial da landing page */
export type Hero = {
  __typename?: 'Hero'
  /** Selecione a imagem que deve aparecer de fundo no tamanho de computador. */
  backgroundDesktop: Asset
  /** Selecione a imagem de deve aparecer de fundo no tamanho de celular. */
  backgroundMobile: Asset
  /** Alvo do botão, ao clicar deve ser enviado para onde? */
  buttonTarget: Scalars['String']['output']
  /** Texto do botão do hero */
  buttonText: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  logo: Asset
  /** System stage field */
  stage: Stage
  subtitle: Scalars['String']['output']
  /** Título de destaque */
  title: RichText
}

/** Seção inicial da landing page */
export type HeroBackgroundDesktopArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Seção inicial da landing page */
export type HeroBackgroundMobileArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Seção inicial da landing page */
export type HeroLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HeroWhereUniqueInput
}

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HeroEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HeroCreateInput = {
  backgroundDesktop: AssetCreateOneInlineInput
  backgroundMobile: AssetCreateOneInlineInput
  buttonTarget: Scalars['String']['input']
  buttonText: Scalars['String']['input']
  logo: AssetCreateOneInlineInput
  subtitle: Scalars['String']['input']
  title: Scalars['RichTextAST']['input']
}

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>
}

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>
}

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Hero
}

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  backgroundDesktop?: InputMaybe<AssetWhereInput>
  backgroundMobile?: InputMaybe<AssetWhereInput>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum HeroOrderByInput {
  ButtonTargetAsc = 'buttonTarget_ASC',
  ButtonTargetDesc = 'buttonTarget_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
}

export type HeroParent = Page

export type HeroParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type HeroParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>
}

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>
}

export type HeroParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>
  /** Update multiple HeroParent documents */
  update?: InputMaybe<
    Array<HeroParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<
    Array<HeroParentUpsertWithNestedWhereUniqueInput>
  >
}

export type HeroParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>
}

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type HeroParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type HeroParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type HeroUpdateInput = {
  backgroundDesktop?: InputMaybe<AssetUpdateOneInlineInput>
  backgroundMobile?: InputMaybe<AssetUpdateOneInlineInput>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  logo?: InputMaybe<AssetUpdateOneInlineInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['RichTextAST']['input']>
}

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>
  /** Update multiple Hero component instances */
  update?: InputMaybe<
    Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<
    Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type HeroUpdateManyInput = {
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['RichTextAST']['input']>
}

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput
  /** Document search */
  where: HeroWhereInput
}

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>
}

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HeroWhereUniqueInput
}

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput
  /** Unique document search */
  where: HeroWhereUniqueInput
}

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput
  /** Update document if it exists */
  update: HeroUpdateInput
}

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HeroWhereUniqueInput
}

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput
  /** Unique document search */
  where: HeroWhereUniqueInput
}

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  backgroundDesktop?: InputMaybe<AssetWhereInput>
  backgroundMobile?: InputMaybe<AssetWhereInput>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Highlight = {
  __typename?: 'Highlight'
  description: Scalars['String']['output']
  /** Ícone do benefício */
  icon: Asset
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** System stage field */
  stage: Stage
  title: Scalars['String']['output']
}

export type HighlightIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type HighlightConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: HighlightWhereUniqueInput
}

/** A connection to a list of items. */
export type HighlightConnection = {
  __typename?: 'HighlightConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<HighlightEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type HighlightCreateInput = {
  description: Scalars['String']['input']
  icon: AssetCreateOneInlineInput
  title: Scalars['String']['input']
}

export type HighlightCreateManyInlineInput = {
  /** Create and connect multiple existing Highlight documents */
  create?: InputMaybe<Array<HighlightCreateInput>>
}

export type HighlightCreateOneInlineInput = {
  /** Create and connect one Highlight document */
  create?: InputMaybe<HighlightCreateInput>
}

export type HighlightCreateWithPositionInput = {
  /** Document to create */
  data: HighlightCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type HighlightEdge = {
  __typename?: 'HighlightEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Highlight
}

/** Identifies documents */
export type HighlightManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HighlightWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HighlightWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HighlightWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum HighlightOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type HighlightParent = BenefitSection

export type HighlightParentConnectInput = {
  BenefitSection?: InputMaybe<BenefitSectionConnectInput>
}

export type HighlightParentCreateInput = {
  BenefitSection?: InputMaybe<BenefitSectionCreateInput>
}

export type HighlightParentCreateManyInlineInput = {
  /** Create and connect multiple existing HighlightParent documents */
  create?: InputMaybe<Array<HighlightParentCreateInput>>
}

export type HighlightParentCreateOneInlineInput = {
  /** Create and connect one HighlightParent document */
  create?: InputMaybe<HighlightParentCreateInput>
}

export type HighlightParentCreateWithPositionInput = {
  BenefitSection?: InputMaybe<BenefitSectionCreateWithPositionInput>
}

export type HighlightParentUpdateInput = {
  BenefitSection?: InputMaybe<BenefitSectionUpdateInput>
}

export type HighlightParentUpdateManyInlineInput = {
  /** Create and connect multiple HighlightParent component instances */
  create?: InputMaybe<Array<HighlightParentCreateWithPositionInput>>
  /** Delete multiple HighlightParent documents */
  delete?: InputMaybe<Array<HighlightParentWhereUniqueInput>>
  /** Update multiple HighlightParent component instances */
  update?: InputMaybe<
    Array<HighlightParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple HighlightParent component instances */
  upsert?: InputMaybe<
    Array<HighlightParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type HighlightParentUpdateManyWithNestedWhereInput = {
  BenefitSection?: InputMaybe<BenefitSectionUpdateManyWithNestedWhereInput>
}

export type HighlightParentUpdateOneInlineInput = {
  /** Create and connect one HighlightParent document */
  create?: InputMaybe<HighlightParentCreateInput>
  /** Delete currently connected HighlightParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single HighlightParent document */
  update?: InputMaybe<HighlightParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single HighlightParent document */
  upsert?: InputMaybe<HighlightParentUpsertWithNestedWhereUniqueInput>
}

export type HighlightParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    BenefitSection?: InputMaybe<BenefitSectionUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type HighlightParentUpdateWithNestedWhereUniqueInput = {
  BenefitSection?: InputMaybe<BenefitSectionUpdateWithNestedWhereUniqueInput>
}

export type HighlightParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    BenefitSection?: InputMaybe<BenefitSectionUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type HighlightParentUpsertWithNestedWhereUniqueInput = {
  BenefitSection?: InputMaybe<BenefitSectionUpsertWithNestedWhereUniqueInput>
}

export type HighlightParentWhereInput = {
  BenefitSection?: InputMaybe<BenefitSectionWhereInput>
}

export type HighlightParentWhereUniqueInput = {
  BenefitSection?: InputMaybe<BenefitSectionWhereUniqueInput>
}

export type HighlightUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<AssetUpdateOneInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
}

export type HighlightUpdateManyInlineInput = {
  /** Create and connect multiple Highlight component instances */
  create?: InputMaybe<Array<HighlightCreateWithPositionInput>>
  /** Delete multiple Highlight documents */
  delete?: InputMaybe<Array<HighlightWhereUniqueInput>>
  /** Update multiple Highlight component instances */
  update?: InputMaybe<
    Array<HighlightUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Highlight component instances */
  upsert?: InputMaybe<
    Array<HighlightUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type HighlightUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type HighlightUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HighlightUpdateManyInput
  /** Document search */
  where: HighlightWhereInput
}

export type HighlightUpdateOneInlineInput = {
  /** Create and connect one Highlight document */
  create?: InputMaybe<HighlightCreateInput>
  /** Delete currently connected Highlight document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Highlight document */
  update?: InputMaybe<HighlightUpdateWithNestedWhereUniqueInput>
  /** Upsert single Highlight document */
  upsert?: InputMaybe<HighlightUpsertWithNestedWhereUniqueInput>
}

export type HighlightUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HighlightUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HighlightWhereUniqueInput
}

export type HighlightUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HighlightUpdateInput
  /** Unique document search */
  where: HighlightWhereUniqueInput
}

export type HighlightUpsertInput = {
  /** Create document if it didn't exist */
  create: HighlightCreateInput
  /** Update document if it exists */
  update: HighlightUpdateInput
}

export type HighlightUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HighlightUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: HighlightWhereUniqueInput
}

export type HighlightUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HighlightUpsertInput
  /** Unique document search */
  where: HighlightWhereUniqueInput
}

/** Identifies documents */
export type HighlightWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HighlightWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HighlightWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HighlightWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Highlight record uniquely */
export type HighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale',
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
}

export type Link = {
  __typename?: 'Link'
  /** The unique identifier */
  id: Scalars['ID']['output']
  label: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  target: Scalars['String']['output']
}

export type LinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: LinkWhereUniqueInput
}

/** A connection to a list of items. */
export type LinkConnection = {
  __typename?: 'LinkConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<LinkEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type LinkCreateInput = {
  label: Scalars['String']['input']
  target: Scalars['String']['input']
}

export type LinkCreateManyInlineInput = {
  /** Create and connect multiple existing Link documents */
  create?: InputMaybe<Array<LinkCreateInput>>
}

export type LinkCreateOneInlineInput = {
  /** Create and connect one Link document */
  create?: InputMaybe<LinkCreateInput>
}

export type LinkCreateWithPositionInput = {
  /** Document to create */
  data: LinkCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type LinkEdge = {
  __typename?: 'LinkEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Link
}

/** Identifies documents */
export type LinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  target_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  target_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  target_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  target_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  target_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  target_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum LinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
}

export type LinkParent = NavigationMenuLink

export type LinkParentConnectInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkConnectInput>
}

export type LinkParentCreateInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkCreateInput>
}

export type LinkParentCreateManyInlineInput = {
  /** Create and connect multiple existing LinkParent documents */
  create?: InputMaybe<Array<LinkParentCreateInput>>
}

export type LinkParentCreateOneInlineInput = {
  /** Create and connect one LinkParent document */
  create?: InputMaybe<LinkParentCreateInput>
}

export type LinkParentCreateWithPositionInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkCreateWithPositionInput>
}

export type LinkParentUpdateInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpdateInput>
}

export type LinkParentUpdateManyInlineInput = {
  /** Create and connect multiple LinkParent component instances */
  create?: InputMaybe<Array<LinkParentCreateWithPositionInput>>
  /** Delete multiple LinkParent documents */
  delete?: InputMaybe<Array<LinkParentWhereUniqueInput>>
  /** Update multiple LinkParent component instances */
  update?: InputMaybe<
    Array<LinkParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple LinkParent component instances */
  upsert?: InputMaybe<
    Array<LinkParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type LinkParentUpdateManyWithNestedWhereInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpdateManyWithNestedWhereInput>
}

export type LinkParentUpdateOneInlineInput = {
  /** Create and connect one LinkParent document */
  create?: InputMaybe<LinkParentCreateInput>
  /** Delete currently connected LinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single LinkParent document */
  update?: InputMaybe<LinkParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single LinkParent document */
  upsert?: InputMaybe<LinkParentUpsertWithNestedWhereUniqueInput>
}

export type LinkParentUpdateWithNestedWhereUniqueAndPositionInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpdateWithNestedWhereUniqueAndPositionInput>
}

export type LinkParentUpdateWithNestedWhereUniqueInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpdateWithNestedWhereUniqueInput>
}

export type LinkParentUpsertWithNestedWhereUniqueAndPositionInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpsertWithNestedWhereUniqueAndPositionInput>
}

export type LinkParentUpsertWithNestedWhereUniqueInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkUpsertWithNestedWhereUniqueInput>
}

export type LinkParentWhereInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkWhereInput>
}

export type LinkParentWhereUniqueInput = {
  NavigationMenuLink?: InputMaybe<NavigationMenuLinkWhereUniqueInput>
}

export type LinkUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
}

export type LinkUpdateManyInlineInput = {
  /** Create and connect multiple Link component instances */
  create?: InputMaybe<Array<LinkCreateWithPositionInput>>
  /** Delete multiple Link documents */
  delete?: InputMaybe<Array<LinkWhereUniqueInput>>
  /** Update multiple Link component instances */
  update?: InputMaybe<
    Array<LinkUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Link component instances */
  upsert?: InputMaybe<
    Array<LinkUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type LinkUpdateManyInput = {
  label?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
}

export type LinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: LinkUpdateManyInput
  /** Document search */
  where: LinkWhereInput
}

export type LinkUpdateOneInlineInput = {
  /** Create and connect one Link document */
  create?: InputMaybe<LinkCreateInput>
  /** Delete currently connected Link document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Link document */
  update?: InputMaybe<LinkUpdateWithNestedWhereUniqueInput>
  /** Upsert single Link document */
  upsert?: InputMaybe<LinkUpsertWithNestedWhereUniqueInput>
}

export type LinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<LinkUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: LinkWhereUniqueInput
}

export type LinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: LinkUpdateInput
  /** Unique document search */
  where: LinkWhereUniqueInput
}

export type LinkUpsertInput = {
  /** Create document if it didn't exist */
  create: LinkCreateInput
  /** Update document if it exists */
  update: LinkUpdateInput
}

export type LinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<LinkUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: LinkWhereUniqueInput
}

export type LinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: LinkUpsertInput
  /** Unique document search */
  where: LinkWhereUniqueInput
}

/** Identifies documents */
export type LinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<LinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<LinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<LinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  target_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  target_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  target_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  target_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  target_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  target_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Link record uniquely */
export type LinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en',
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type Methodology = {
  __typename?: 'Methodology'
  description: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  /** System stage field */
  stage: Stage
}

export type MethodologyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: MethodologyWhereUniqueInput
}

/** A connection to a list of items. */
export type MethodologyConnection = {
  __typename?: 'MethodologyConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<MethodologyEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type MethodologyCreateInput = {
  description: Scalars['String']['input']
  name: Scalars['String']['input']
}

export type MethodologyCreateManyInlineInput = {
  /** Create and connect multiple existing Methodology documents */
  create?: InputMaybe<Array<MethodologyCreateInput>>
}

export type MethodologyCreateOneInlineInput = {
  /** Create and connect one Methodology document */
  create?: InputMaybe<MethodologyCreateInput>
}

export type MethodologyCreateWithPositionInput = {
  /** Document to create */
  data: MethodologyCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type MethodologyEdge = {
  __typename?: 'MethodologyEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Methodology
}

/** Identifies documents */
export type MethodologyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MethodologyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MethodologyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MethodologyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum MethodologyOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type MethodologyParent = PillarSection

export type MethodologyParentConnectInput = {
  PillarSection?: InputMaybe<PillarSectionConnectInput>
}

export type MethodologyParentCreateInput = {
  PillarSection?: InputMaybe<PillarSectionCreateInput>
}

export type MethodologyParentCreateManyInlineInput = {
  /** Create and connect multiple existing MethodologyParent documents */
  create?: InputMaybe<Array<MethodologyParentCreateInput>>
}

export type MethodologyParentCreateOneInlineInput = {
  /** Create and connect one MethodologyParent document */
  create?: InputMaybe<MethodologyParentCreateInput>
}

export type MethodologyParentCreateWithPositionInput = {
  PillarSection?: InputMaybe<PillarSectionCreateWithPositionInput>
}

export type MethodologyParentUpdateInput = {
  PillarSection?: InputMaybe<PillarSectionUpdateInput>
}

export type MethodologyParentUpdateManyInlineInput = {
  /** Create and connect multiple MethodologyParent component instances */
  create?: InputMaybe<Array<MethodologyParentCreateWithPositionInput>>
  /** Delete multiple MethodologyParent documents */
  delete?: InputMaybe<Array<MethodologyParentWhereUniqueInput>>
  /** Update multiple MethodologyParent component instances */
  update?: InputMaybe<
    Array<MethodologyParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple MethodologyParent component instances */
  upsert?: InputMaybe<
    Array<MethodologyParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type MethodologyParentUpdateManyWithNestedWhereInput = {
  PillarSection?: InputMaybe<PillarSectionUpdateManyWithNestedWhereInput>
}

export type MethodologyParentUpdateOneInlineInput = {
  /** Create and connect one MethodologyParent document */
  create?: InputMaybe<MethodologyParentCreateInput>
  /** Delete currently connected MethodologyParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single MethodologyParent document */
  update?: InputMaybe<MethodologyParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single MethodologyParent document */
  upsert?: InputMaybe<MethodologyParentUpsertWithNestedWhereUniqueInput>
}

export type MethodologyParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    PillarSection?: InputMaybe<PillarSectionUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type MethodologyParentUpdateWithNestedWhereUniqueInput = {
  PillarSection?: InputMaybe<PillarSectionUpdateWithNestedWhereUniqueInput>
}

export type MethodologyParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    PillarSection?: InputMaybe<PillarSectionUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type MethodologyParentUpsertWithNestedWhereUniqueInput = {
  PillarSection?: InputMaybe<PillarSectionUpsertWithNestedWhereUniqueInput>
}

export type MethodologyParentWhereInput = {
  PillarSection?: InputMaybe<PillarSectionWhereInput>
}

export type MethodologyParentWhereUniqueInput = {
  PillarSection?: InputMaybe<PillarSectionWhereUniqueInput>
}

export type MethodologyUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type MethodologyUpdateManyInlineInput = {
  /** Create and connect multiple Methodology component instances */
  create?: InputMaybe<Array<MethodologyCreateWithPositionInput>>
  /** Delete multiple Methodology documents */
  delete?: InputMaybe<Array<MethodologyWhereUniqueInput>>
  /** Update multiple Methodology component instances */
  update?: InputMaybe<
    Array<MethodologyUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Methodology component instances */
  upsert?: InputMaybe<
    Array<MethodologyUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type MethodologyUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type MethodologyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MethodologyUpdateManyInput
  /** Document search */
  where: MethodologyWhereInput
}

export type MethodologyUpdateOneInlineInput = {
  /** Create and connect one Methodology document */
  create?: InputMaybe<MethodologyCreateInput>
  /** Delete currently connected Methodology document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Methodology document */
  update?: InputMaybe<MethodologyUpdateWithNestedWhereUniqueInput>
  /** Upsert single Methodology document */
  upsert?: InputMaybe<MethodologyUpsertWithNestedWhereUniqueInput>
}

export type MethodologyUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<MethodologyUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: MethodologyWhereUniqueInput
}

export type MethodologyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MethodologyUpdateInput
  /** Unique document search */
  where: MethodologyWhereUniqueInput
}

export type MethodologyUpsertInput = {
  /** Create document if it didn't exist */
  create: MethodologyCreateInput
  /** Update document if it exists */
  update: MethodologyUpdateInput
}

export type MethodologyUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<MethodologyUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: MethodologyWhereUniqueInput
}

export type MethodologyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MethodologyUpsertInput
  /** Unique document search */
  where: MethodologyWhereUniqueInput
}

/** Identifies documents */
export type MethodologyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MethodologyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MethodologyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MethodologyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Methodology record uniquely */
export type MethodologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>
  /** Create one page */
  createPage?: Maybe<Page>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one subscriptionForm */
  createSubscriptionForm?: Maybe<SubscriptionForm>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection
  /**
   * Delete many SubscriptionForm documents
   * @deprecated Please use the new paginated many mutation (deleteManySubscriptionsFormConnection)
   */
  deleteManySubscriptionsForm: BatchPayload
  /** Delete many SubscriptionForm documents, return deleted documents */
  deleteManySubscriptionsFormConnection: SubscriptionFormConnection
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one subscriptionForm from _all_ existing stages. Returns deleted document. */
  deleteSubscriptionForm?: Maybe<SubscriptionForm>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection
  /**
   * Publish many SubscriptionForm documents
   * @deprecated Please use the new paginated many mutation (publishManySubscriptionsFormConnection)
   */
  publishManySubscriptionsForm: BatchPayload
  /** Publish many SubscriptionForm documents */
  publishManySubscriptionsFormConnection: SubscriptionFormConnection
  /** Publish one page */
  publishPage?: Maybe<Page>
  /** Publish one subscriptionForm */
  publishSubscriptionForm?: Maybe<SubscriptionForm>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>
  /** Schedule to publish one subscriptionForm */
  schedulePublishSubscriptionForm?: Maybe<SubscriptionForm>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>
  /** Unpublish one subscriptionForm from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSubscriptionForm?: Maybe<SubscriptionForm>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection
  /**
   * Unpublish many SubscriptionForm documents
   * @deprecated Please use the new paginated many mutation (unpublishManySubscriptionsFormConnection)
   */
  unpublishManySubscriptionsForm: BatchPayload
  /** Find many SubscriptionForm documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySubscriptionsFormConnection: SubscriptionFormConnection
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>
  /** Unpublish one subscriptionForm from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSubscriptionForm?: Maybe<SubscriptionForm>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection
  /**
   * Update many subscriptionsForm
   * @deprecated Please use the new paginated many mutation (updateManySubscriptionsFormConnection)
   */
  updateManySubscriptionsForm: BatchPayload
  /** Update many SubscriptionForm documents */
  updateManySubscriptionsFormConnection: SubscriptionFormConnection
  /** Update one page */
  updatePage?: Maybe<Page>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one subscriptionForm */
  updateSubscriptionForm?: Maybe<SubscriptionForm>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one page */
  upsertPage?: Maybe<Page>
  /** Upsert one subscriptionForm */
  upsertSubscriptionForm?: Maybe<SubscriptionForm>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreatePageArgs = {
  data: PageCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateSubscriptionFormArgs = {
  data: SubscriptionFormCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationDeleteManySubscriptionsFormArgs = {
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationDeleteManySubscriptionsFormConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteSubscriptionFormArgs = {
  where: SubscriptionFormWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyPagesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationPublishManySubscriptionsFormArgs = {
  to?: Array<Stage>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationPublishManySubscriptionsFormConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationPublishPageArgs = {
  to?: Array<Stage>
  where: PageWhereUniqueInput
}

export type MutationPublishSubscriptionFormArgs = {
  to?: Array<Stage>
  where: SubscriptionFormWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationSchedulePublishPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: PageWhereUniqueInput
}

export type MutationSchedulePublishSubscriptionFormArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: SubscriptionFormWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: PageWhereUniqueInput
}

export type MutationScheduleUnpublishSubscriptionFormArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: SubscriptionFormWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationUnpublishManySubscriptionsFormArgs = {
  from?: Array<Stage>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationUnpublishManySubscriptionsFormConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationUnpublishPageArgs = {
  from?: Array<Stage>
  where: PageWhereUniqueInput
}

export type MutationUnpublishSubscriptionFormArgs = {
  from?: Array<Stage>
  where: SubscriptionFormWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: PageUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageManyWhereInput>
}

export type MutationUpdateManySubscriptionsFormArgs = {
  data: SubscriptionFormUpdateManyInput
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationUpdateManySubscriptionsFormConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: SubscriptionFormUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SubscriptionFormManyWhereInput>
}

export type MutationUpdatePageArgs = {
  data: PageUpdateInput
  where: PageWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateSubscriptionFormArgs = {
  data: SubscriptionFormUpdateInput
  where: SubscriptionFormWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput
  where: PageWhereUniqueInput
}

export type MutationUpsertSubscriptionFormArgs = {
  upsert: SubscriptionFormUpsertInput
  where: SubscriptionFormWhereUniqueInput
}

/** Links de navegação */
export type NavigationItem = {
  __typename?: 'NavigationItem'
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Texto do item de navegação */
  label: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  /** Seção alvo, ao clicar para onde vai ser enviado? */
  target: Scalars['String']['output']
}

export type NavigationItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: NavigationItemWhereUniqueInput
}

/** A connection to a list of items. */
export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<NavigationItemEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type NavigationItemCreateInput = {
  label: Scalars['String']['input']
  target: Scalars['String']['input']
}

export type NavigationItemCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationItem documents */
  create?: InputMaybe<Array<NavigationItemCreateInput>>
}

export type NavigationItemCreateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>
}

export type NavigationItemCreateWithPositionInput = {
  /** Document to create */
  data: NavigationItemCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type NavigationItemEdge = {
  __typename?: 'NavigationItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: NavigationItem
}

/** Identifies documents */
export type NavigationItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  target_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  target_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  target_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  target_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  target_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  target_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum NavigationItemOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
}

export type NavigationItemParent = Header

export type NavigationItemParentConnectInput = {
  Header?: InputMaybe<HeaderConnectInput>
}

export type NavigationItemParentCreateInput = {
  Header?: InputMaybe<HeaderCreateInput>
}

export type NavigationItemParentCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationItemParent documents */
  create?: InputMaybe<Array<NavigationItemParentCreateInput>>
}

export type NavigationItemParentCreateOneInlineInput = {
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>
}

export type NavigationItemParentCreateWithPositionInput = {
  Header?: InputMaybe<HeaderCreateWithPositionInput>
}

export type NavigationItemParentUpdateInput = {
  Header?: InputMaybe<HeaderUpdateInput>
}

export type NavigationItemParentUpdateManyInlineInput = {
  /** Create and connect multiple NavigationItemParent component instances */
  create?: InputMaybe<
    Array<NavigationItemParentCreateWithPositionInput>
  >
  /** Delete multiple NavigationItemParent documents */
  delete?: InputMaybe<Array<NavigationItemParentWhereUniqueInput>>
  /** Update multiple NavigationItemParent component instances */
  update?: InputMaybe<
    Array<NavigationItemParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple NavigationItemParent component instances */
  upsert?: InputMaybe<
    Array<NavigationItemParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type NavigationItemParentUpdateManyWithNestedWhereInput = {
  Header?: InputMaybe<HeaderUpdateManyWithNestedWhereInput>
}

export type NavigationItemParentUpdateOneInlineInput = {
  /** Create and connect one NavigationItemParent document */
  create?: InputMaybe<NavigationItemParentCreateInput>
  /** Delete currently connected NavigationItemParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single NavigationItemParent document */
  update?: InputMaybe<NavigationItemParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single NavigationItemParent document */
  upsert?: InputMaybe<NavigationItemParentUpsertWithNestedWhereUniqueInput>
}

export type NavigationItemParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    Header?: InputMaybe<HeaderUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type NavigationItemParentUpdateWithNestedWhereUniqueInput = {
  Header?: InputMaybe<HeaderUpdateWithNestedWhereUniqueInput>
}

export type NavigationItemParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    Header?: InputMaybe<HeaderUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type NavigationItemParentUpsertWithNestedWhereUniqueInput = {
  Header?: InputMaybe<HeaderUpsertWithNestedWhereUniqueInput>
}

export type NavigationItemParentWhereInput = {
  Header?: InputMaybe<HeaderWhereInput>
}

export type NavigationItemParentWhereUniqueInput = {
  Header?: InputMaybe<HeaderWhereUniqueInput>
}

export type NavigationItemUpdateInput = {
  label?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
}

export type NavigationItemUpdateManyInlineInput = {
  /** Create and connect multiple NavigationItem component instances */
  create?: InputMaybe<Array<NavigationItemCreateWithPositionInput>>
  /** Delete multiple NavigationItem documents */
  delete?: InputMaybe<Array<NavigationItemWhereUniqueInput>>
  /** Update multiple NavigationItem component instances */
  update?: InputMaybe<
    Array<NavigationItemUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple NavigationItem component instances */
  upsert?: InputMaybe<
    Array<NavigationItemUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type NavigationItemUpdateManyInput = {
  target?: InputMaybe<Scalars['String']['input']>
}

export type NavigationItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationItemUpdateManyInput
  /** Document search */
  where: NavigationItemWhereInput
}

export type NavigationItemUpdateOneInlineInput = {
  /** Create and connect one NavigationItem document */
  create?: InputMaybe<NavigationItemCreateInput>
  /** Delete currently connected NavigationItem document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single NavigationItem document */
  update?: InputMaybe<NavigationItemUpdateWithNestedWhereUniqueInput>
  /** Upsert single NavigationItem document */
  upsert?: InputMaybe<NavigationItemUpsertWithNestedWhereUniqueInput>
}

export type NavigationItemUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<NavigationItemUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: NavigationItemWhereUniqueInput
  }

export type NavigationItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationItemUpdateInput
  /** Unique document search */
  where: NavigationItemWhereUniqueInput
}

export type NavigationItemUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationItemCreateInput
  /** Update document if it exists */
  update: NavigationItemUpdateInput
}

export type NavigationItemUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<NavigationItemUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: NavigationItemWhereUniqueInput
  }

export type NavigationItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationItemUpsertInput
  /** Unique document search */
  where: NavigationItemWhereUniqueInput
}

/** Identifies documents */
export type NavigationItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationItemWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']['input']>
  target?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  target_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  target_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  target_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  target_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  target_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  target_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  target_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  target_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  target_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References NavigationItem record uniquely */
export type NavigationItemWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  label?: InputMaybe<Scalars['String']['input']>
}

export type NavigationMenuLink = {
  __typename?: 'NavigationMenuLink'
  /** The unique identifier */
  id: Scalars['ID']['output']
  links: Array<Link>
  /** System stage field */
  stage: Stage
  title: Scalars['String']['output']
}

export type NavigationMenuLinkLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<LinkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LinkWhereInput>
}

export type NavigationMenuLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: NavigationMenuLinkWhereUniqueInput
}

/** A connection to a list of items. */
export type NavigationMenuLinkConnection = {
  __typename?: 'NavigationMenuLinkConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<NavigationMenuLinkEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type NavigationMenuLinkCreateInput = {
  links?: InputMaybe<LinkCreateManyInlineInput>
  title: Scalars['String']['input']
}

export type NavigationMenuLinkCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationMenuLink documents */
  create?: InputMaybe<Array<NavigationMenuLinkCreateInput>>
}

export type NavigationMenuLinkCreateOneInlineInput = {
  /** Create and connect one NavigationMenuLink document */
  create?: InputMaybe<NavigationMenuLinkCreateInput>
}

export type NavigationMenuLinkCreateWithPositionInput = {
  /** Document to create */
  data: NavigationMenuLinkCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type NavigationMenuLinkEdge = {
  __typename?: 'NavigationMenuLinkEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: NavigationMenuLink
}

/** Identifies documents */
export type NavigationMenuLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  links_every?: InputMaybe<LinkWhereInput>
  links_none?: InputMaybe<LinkWhereInput>
  links_some?: InputMaybe<LinkWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum NavigationMenuLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type NavigationMenuLinkParent = Footer

export type NavigationMenuLinkParentConnectInput = {
  Footer?: InputMaybe<FooterConnectInput>
}

export type NavigationMenuLinkParentCreateInput = {
  Footer?: InputMaybe<FooterCreateInput>
}

export type NavigationMenuLinkParentCreateManyInlineInput = {
  /** Create and connect multiple existing NavigationMenuLinkParent documents */
  create?: InputMaybe<Array<NavigationMenuLinkParentCreateInput>>
}

export type NavigationMenuLinkParentCreateOneInlineInput = {
  /** Create and connect one NavigationMenuLinkParent document */
  create?: InputMaybe<NavigationMenuLinkParentCreateInput>
}

export type NavigationMenuLinkParentCreateWithPositionInput = {
  Footer?: InputMaybe<FooterCreateWithPositionInput>
}

export type NavigationMenuLinkParentUpdateInput = {
  Footer?: InputMaybe<FooterUpdateInput>
}

export type NavigationMenuLinkParentUpdateManyInlineInput = {
  /** Create and connect multiple NavigationMenuLinkParent component instances */
  create?: InputMaybe<
    Array<NavigationMenuLinkParentCreateWithPositionInput>
  >
  /** Delete multiple NavigationMenuLinkParent documents */
  delete?: InputMaybe<Array<NavigationMenuLinkParentWhereUniqueInput>>
  /** Update multiple NavigationMenuLinkParent component instances */
  update?: InputMaybe<
    Array<NavigationMenuLinkParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple NavigationMenuLinkParent component instances */
  upsert?: InputMaybe<
    Array<NavigationMenuLinkParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type NavigationMenuLinkParentUpdateManyWithNestedWhereInput = {
  Footer?: InputMaybe<FooterUpdateManyWithNestedWhereInput>
}

export type NavigationMenuLinkParentUpdateOneInlineInput = {
  /** Create and connect one NavigationMenuLinkParent document */
  create?: InputMaybe<NavigationMenuLinkParentCreateInput>
  /** Delete currently connected NavigationMenuLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single NavigationMenuLinkParent document */
  update?: InputMaybe<NavigationMenuLinkParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single NavigationMenuLinkParent document */
  upsert?: InputMaybe<NavigationMenuLinkParentUpsertWithNestedWhereUniqueInput>
}

export type NavigationMenuLinkParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type NavigationMenuLinkParentUpdateWithNestedWhereUniqueInput =
  {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>
  }

export type NavigationMenuLinkParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type NavigationMenuLinkParentUpsertWithNestedWhereUniqueInput =
  {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>
  }

export type NavigationMenuLinkParentWhereInput = {
  Footer?: InputMaybe<FooterWhereInput>
}

export type NavigationMenuLinkParentWhereUniqueInput = {
  Footer?: InputMaybe<FooterWhereUniqueInput>
}

export type NavigationMenuLinkUpdateInput = {
  links?: InputMaybe<LinkUpdateManyInlineInput>
  title?: InputMaybe<Scalars['String']['input']>
}

export type NavigationMenuLinkUpdateManyInlineInput = {
  /** Create and connect multiple NavigationMenuLink component instances */
  create?: InputMaybe<
    Array<NavigationMenuLinkCreateWithPositionInput>
  >
  /** Delete multiple NavigationMenuLink documents */
  delete?: InputMaybe<Array<NavigationMenuLinkWhereUniqueInput>>
  /** Update multiple NavigationMenuLink component instances */
  update?: InputMaybe<
    Array<NavigationMenuLinkUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple NavigationMenuLink component instances */
  upsert?: InputMaybe<
    Array<NavigationMenuLinkUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type NavigationMenuLinkUpdateManyInput = {
  title?: InputMaybe<Scalars['String']['input']>
}

export type NavigationMenuLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NavigationMenuLinkUpdateManyInput
  /** Document search */
  where: NavigationMenuLinkWhereInput
}

export type NavigationMenuLinkUpdateOneInlineInput = {
  /** Create and connect one NavigationMenuLink document */
  create?: InputMaybe<NavigationMenuLinkCreateInput>
  /** Delete currently connected NavigationMenuLink document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single NavigationMenuLink document */
  update?: InputMaybe<NavigationMenuLinkUpdateWithNestedWhereUniqueInput>
  /** Upsert single NavigationMenuLink document */
  upsert?: InputMaybe<NavigationMenuLinkUpsertWithNestedWhereUniqueInput>
}

export type NavigationMenuLinkUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<NavigationMenuLinkUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: NavigationMenuLinkWhereUniqueInput
  }

export type NavigationMenuLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NavigationMenuLinkUpdateInput
  /** Unique document search */
  where: NavigationMenuLinkWhereUniqueInput
}

export type NavigationMenuLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: NavigationMenuLinkCreateInput
  /** Update document if it exists */
  update: NavigationMenuLinkUpdateInput
}

export type NavigationMenuLinkUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<NavigationMenuLinkUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: NavigationMenuLinkWhereUniqueInput
  }

export type NavigationMenuLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NavigationMenuLinkUpsertInput
  /** Unique document search */
  where: NavigationMenuLinkWhereUniqueInput
}

/** Identifies documents */
export type NavigationMenuLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NavigationMenuLinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  links_every?: InputMaybe<LinkWhereInput>
  links_none?: InputMaybe<LinkWhereInput>
  links_some?: InputMaybe<LinkWhereInput>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References NavigationMenuLink record uniquely */
export type NavigationMenuLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

export type Page = Node & {
  __typename?: 'Page'
  aboutSection: AboutSection
  benefitsSection: BenefitSection
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Get the document in other stages */
  documentInStages: Array<Page>
  faqSection: FaqSection
  footer: Footer
  /** Cabeçalho */
  header: Header
  /** Seção inicial da landing page */
  hero: Hero
  /** List of Page versions */
  history: Array<Version>
  /** The unique identifier */
  id: Scalars['ID']['output']
  pillarsSection: PillarSection
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Seção para relembrar os visitantes a se inscrever */
  rememberActionSection: RememberActionSection
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  stepsSection: StepSection
  testimonialSection: TestimonialSection
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

export type PageAboutSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageBenefitsSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type PageFaqSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageFooterArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageHeaderArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type PagePillarsSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageRememberActionSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type PageStepsSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageTestimonialSectionArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PageWhereUniqueInput
}

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PageEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PageCreateInput = {
  aboutSection: AboutSectionCreateOneInlineInput
  benefitsSection: BenefitSectionCreateOneInlineInput
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  faqSection: FaqSectionCreateOneInlineInput
  footer: FooterCreateOneInlineInput
  header: HeaderCreateOneInlineInput
  hero: HeroCreateOneInlineInput
  pillarsSection: PillarSectionCreateOneInlineInput
  rememberActionSection: RememberActionSectionCreateOneInlineInput
  stepsSection: StepSectionCreateOneInlineInput
  testimonialSection: TestimonialSectionCreateOneInlineInput
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>
}

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>
}

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Page
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  aboutSection?: InputMaybe<AboutSectionWhereInput>
  benefitsSection?: InputMaybe<BenefitSectionWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PageWhereStageInput>
  documentInStages_none?: InputMaybe<PageWhereStageInput>
  documentInStages_some?: InputMaybe<PageWhereStageInput>
  faqSection?: InputMaybe<FaqSectionWhereInput>
  footer?: InputMaybe<FooterWhereInput>
  header?: InputMaybe<HeaderWhereInput>
  hero?: InputMaybe<HeroWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  pillarsSection?: InputMaybe<PillarSectionWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  rememberActionSection?: InputMaybe<RememberActionSectionWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  stepsSection?: InputMaybe<StepSectionWhereInput>
  testimonialSection?: InputMaybe<TestimonialSectionWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PageUpdateInput = {
  aboutSection?: InputMaybe<AboutSectionUpdateOneInlineInput>
  benefitsSection?: InputMaybe<BenefitSectionUpdateOneInlineInput>
  faqSection?: InputMaybe<FaqSectionUpdateOneInlineInput>
  footer?: InputMaybe<FooterUpdateOneInlineInput>
  header?: InputMaybe<HeaderUpdateOneInlineInput>
  hero?: InputMaybe<HeroUpdateOneInlineInput>
  pillarsSection?: InputMaybe<PillarSectionUpdateOneInlineInput>
  rememberActionSection?: InputMaybe<RememberActionSectionUpdateOneInlineInput>
  stepsSection?: InputMaybe<StepSectionUpdateOneInlineInput>
  testimonialSection?: InputMaybe<TestimonialSectionUpdateOneInlineInput>
}

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>
}

export type PageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']['input']>
}

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput
  /** Document search */
  where: PageWhereInput
}

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput
  /** Unique document search */
  where: PageWhereUniqueInput
}

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput
  /** Update document if it exists */
  update: PageUpdateInput
}

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput
  /** Unique document search */
  where: PageWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type PageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  aboutSection?: InputMaybe<AboutSectionWhereInput>
  benefitsSection?: InputMaybe<BenefitSectionWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<PageWhereStageInput>
  documentInStages_none?: InputMaybe<PageWhereStageInput>
  documentInStages_some?: InputMaybe<PageWhereStageInput>
  faqSection?: InputMaybe<FaqSectionWhereInput>
  footer?: InputMaybe<FooterWhereInput>
  header?: InputMaybe<HeaderWhereInput>
  hero?: InputMaybe<HeroWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  pillarsSection?: InputMaybe<PillarSectionWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  rememberActionSection?: InputMaybe<RememberActionSectionWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  stepsSection?: InputMaybe<StepSectionWhereInput>
  testimonialSection?: InputMaybe<TestimonialSectionWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PageWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PillarSection = {
  __typename?: 'PillarSection'
  description: Scalars['String']['output']
  heading: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  methodologys: Array<Methodology>
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
}

export type PillarSectionMethodologysArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<MethodologyOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<MethodologyWhereInput>
}

export type PillarSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: PillarSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type PillarSectionConnection = {
  __typename?: 'PillarSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<PillarSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type PillarSectionCreateInput = {
  description: Scalars['String']['input']
  heading: Scalars['String']['input']
  methodologys?: InputMaybe<MethodologyCreateManyInlineInput>
  sectionId: Scalars['String']['input']
}

export type PillarSectionCreateManyInlineInput = {
  /** Create and connect multiple existing PillarSection documents */
  create?: InputMaybe<Array<PillarSectionCreateInput>>
}

export type PillarSectionCreateOneInlineInput = {
  /** Create and connect one PillarSection document */
  create?: InputMaybe<PillarSectionCreateInput>
}

export type PillarSectionCreateWithPositionInput = {
  /** Document to create */
  data: PillarSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type PillarSectionEdge = {
  __typename?: 'PillarSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: PillarSection
}

/** Identifies documents */
export type PillarSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  methodologys_every?: InputMaybe<MethodologyWhereInput>
  methodologys_none?: InputMaybe<MethodologyWhereInput>
  methodologys_some?: InputMaybe<MethodologyWhereInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum PillarSectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type PillarSectionParent = Page

export type PillarSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type PillarSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type PillarSectionParentCreateManyInlineInput = {
  /** Connect multiple existing PillarSectionParent documents */
  connect?: InputMaybe<Array<PillarSectionParentWhereUniqueInput>>
  /** Create and connect multiple existing PillarSectionParent documents */
  create?: InputMaybe<Array<PillarSectionParentCreateInput>>
}

export type PillarSectionParentCreateOneInlineInput = {
  /** Connect one existing PillarSectionParent document */
  connect?: InputMaybe<PillarSectionParentWhereUniqueInput>
  /** Create and connect one PillarSectionParent document */
  create?: InputMaybe<PillarSectionParentCreateInput>
}

export type PillarSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type PillarSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing PillarSectionParent documents */
  connect?: InputMaybe<Array<PillarSectionParentConnectInput>>
  /** Create and connect multiple PillarSectionParent documents */
  create?: InputMaybe<Array<PillarSectionParentCreateInput>>
  /** Delete multiple PillarSectionParent documents */
  delete?: InputMaybe<Array<PillarSectionParentWhereUniqueInput>>
  /** Disconnect multiple PillarSectionParent documents */
  disconnect?: InputMaybe<Array<PillarSectionParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing PillarSectionParent documents */
  set?: InputMaybe<Array<PillarSectionParentWhereUniqueInput>>
  /** Update multiple PillarSectionParent documents */
  update?: InputMaybe<
    Array<PillarSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple PillarSectionParent documents */
  upsert?: InputMaybe<
    Array<PillarSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type PillarSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type PillarSectionParentUpdateOneInlineInput = {
  /** Connect existing PillarSectionParent document */
  connect?: InputMaybe<PillarSectionParentWhereUniqueInput>
  /** Create and connect one PillarSectionParent document */
  create?: InputMaybe<PillarSectionParentCreateInput>
  /** Delete currently connected PillarSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected PillarSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single PillarSectionParent document */
  update?: InputMaybe<PillarSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single PillarSectionParent document */
  upsert?: InputMaybe<PillarSectionParentUpsertWithNestedWhereUniqueInput>
}

export type PillarSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type PillarSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type PillarSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type PillarSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type PillarSectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  methodologys?: InputMaybe<MethodologyUpdateManyInlineInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type PillarSectionUpdateManyInlineInput = {
  /** Create and connect multiple PillarSection component instances */
  create?: InputMaybe<Array<PillarSectionCreateWithPositionInput>>
  /** Delete multiple PillarSection documents */
  delete?: InputMaybe<Array<PillarSectionWhereUniqueInput>>
  /** Update multiple PillarSection component instances */
  update?: InputMaybe<
    Array<PillarSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple PillarSection component instances */
  upsert?: InputMaybe<
    Array<PillarSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type PillarSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type PillarSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PillarSectionUpdateManyInput
  /** Document search */
  where: PillarSectionWhereInput
}

export type PillarSectionUpdateOneInlineInput = {
  /** Create and connect one PillarSection document */
  create?: InputMaybe<PillarSectionCreateInput>
  /** Delete currently connected PillarSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single PillarSection document */
  update?: InputMaybe<PillarSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single PillarSection document */
  upsert?: InputMaybe<PillarSectionUpsertWithNestedWhereUniqueInput>
}

export type PillarSectionUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<PillarSectionUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: PillarSectionWhereUniqueInput
  }

export type PillarSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PillarSectionUpdateInput
  /** Unique document search */
  where: PillarSectionWhereUniqueInput
}

export type PillarSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: PillarSectionCreateInput
  /** Update document if it exists */
  update: PillarSectionUpdateInput
}

export type PillarSectionUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<PillarSectionUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: PillarSectionWhereUniqueInput
  }

export type PillarSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PillarSectionUpsertInput
  /** Unique document search */
  where: PillarSectionWhereUniqueInput
}

/** Identifies documents */
export type PillarSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PillarSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  methodologys_every?: InputMaybe<MethodologyWhereInput>
  methodologys_none?: InputMaybe<MethodologyWhereInput>
  methodologys_some?: InputMaybe<MethodologyWhereInput>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References PillarSection record uniquely */
export type PillarSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single page */
  page?: Maybe<Page>
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple pages */
  pages: Array<Page>
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve a single subscriptionForm */
  subscriptionForm?: Maybe<SubscriptionForm>
  /** Retrieve document version */
  subscriptionFormVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple subscriptionsForm */
  subscriptionsForm: Array<SubscriptionForm>
  /** Retrieve multiple subscriptionsForm using the Relay connection interface */
  subscriptionsFormConnection: SubscriptionFormConnection
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryPageArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: PageWhereUniqueInput
}

export type QueryPageVersionArgs = {
  where: VersionWhereInput
}

export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PageOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<PageWhereInput>
}

export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<PageOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<PageWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QuerySubscriptionFormArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: SubscriptionFormWhereUniqueInput
}

export type QuerySubscriptionFormVersionArgs = {
  where: VersionWhereInput
}

export type QuerySubscriptionsFormArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SubscriptionFormOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<SubscriptionFormWhereInput>
}

export type QuerySubscriptionsFormConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<SubscriptionFormOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<SubscriptionFormWhereInput>
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type Question = {
  __typename?: 'Question'
  content: RichText
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** System stage field */
  stage: Stage
  title: Scalars['String']['output']
}

export type QuestionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: QuestionWhereUniqueInput
}

/** A connection to a list of items. */
export type QuestionConnection = {
  __typename?: 'QuestionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<QuestionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type QuestionCreateInput = {
  content: Scalars['RichTextAST']['input']
  title: Scalars['String']['input']
}

export type QuestionCreateManyInlineInput = {
  /** Create and connect multiple existing Question documents */
  create?: InputMaybe<Array<QuestionCreateInput>>
}

export type QuestionCreateOneInlineInput = {
  /** Create and connect one Question document */
  create?: InputMaybe<QuestionCreateInput>
}

export type QuestionCreateWithPositionInput = {
  /** Document to create */
  data: QuestionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type QuestionEdge = {
  __typename?: 'QuestionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Question
}

/** Identifies documents */
export type QuestionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuestionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuestionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuestionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum QuestionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type QuestionParent = FaqSection

export type QuestionParentConnectInput = {
  FaqSection?: InputMaybe<FaqSectionConnectInput>
}

export type QuestionParentCreateInput = {
  FaqSection?: InputMaybe<FaqSectionCreateInput>
}

export type QuestionParentCreateManyInlineInput = {
  /** Create and connect multiple existing QuestionParent documents */
  create?: InputMaybe<Array<QuestionParentCreateInput>>
}

export type QuestionParentCreateOneInlineInput = {
  /** Create and connect one QuestionParent document */
  create?: InputMaybe<QuestionParentCreateInput>
}

export type QuestionParentCreateWithPositionInput = {
  FaqSection?: InputMaybe<FaqSectionCreateWithPositionInput>
}

export type QuestionParentUpdateInput = {
  FaqSection?: InputMaybe<FaqSectionUpdateInput>
}

export type QuestionParentUpdateManyInlineInput = {
  /** Create and connect multiple QuestionParent component instances */
  create?: InputMaybe<Array<QuestionParentCreateWithPositionInput>>
  /** Delete multiple QuestionParent documents */
  delete?: InputMaybe<Array<QuestionParentWhereUniqueInput>>
  /** Update multiple QuestionParent component instances */
  update?: InputMaybe<
    Array<QuestionParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple QuestionParent component instances */
  upsert?: InputMaybe<
    Array<QuestionParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type QuestionParentUpdateManyWithNestedWhereInput = {
  FaqSection?: InputMaybe<FaqSectionUpdateManyWithNestedWhereInput>
}

export type QuestionParentUpdateOneInlineInput = {
  /** Create and connect one QuestionParent document */
  create?: InputMaybe<QuestionParentCreateInput>
  /** Delete currently connected QuestionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single QuestionParent document */
  update?: InputMaybe<QuestionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single QuestionParent document */
  upsert?: InputMaybe<QuestionParentUpsertWithNestedWhereUniqueInput>
}

export type QuestionParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    FaqSection?: InputMaybe<FaqSectionUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type QuestionParentUpdateWithNestedWhereUniqueInput = {
  FaqSection?: InputMaybe<FaqSectionUpdateWithNestedWhereUniqueInput>
}

export type QuestionParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    FaqSection?: InputMaybe<FaqSectionUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type QuestionParentUpsertWithNestedWhereUniqueInput = {
  FaqSection?: InputMaybe<FaqSectionUpsertWithNestedWhereUniqueInput>
}

export type QuestionParentWhereInput = {
  FaqSection?: InputMaybe<FaqSectionWhereInput>
}

export type QuestionParentWhereUniqueInput = {
  FaqSection?: InputMaybe<FaqSectionWhereUniqueInput>
}

export type QuestionUpdateInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type QuestionUpdateManyInlineInput = {
  /** Create and connect multiple Question component instances */
  create?: InputMaybe<Array<QuestionCreateWithPositionInput>>
  /** Delete multiple Question documents */
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>
  /** Update multiple Question component instances */
  update?: InputMaybe<
    Array<QuestionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Question component instances */
  upsert?: InputMaybe<
    Array<QuestionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type QuestionUpdateManyInput = {
  content?: InputMaybe<Scalars['RichTextAST']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type QuestionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: QuestionUpdateManyInput
  /** Document search */
  where: QuestionWhereInput
}

export type QuestionUpdateOneInlineInput = {
  /** Create and connect one Question document */
  create?: InputMaybe<QuestionCreateInput>
  /** Delete currently connected Question document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Question document */
  update?: InputMaybe<QuestionUpdateWithNestedWhereUniqueInput>
  /** Upsert single Question document */
  upsert?: InputMaybe<QuestionUpsertWithNestedWhereUniqueInput>
}

export type QuestionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<QuestionUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: QuestionWhereUniqueInput
}

export type QuestionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: QuestionUpdateInput
  /** Unique document search */
  where: QuestionWhereUniqueInput
}

export type QuestionUpsertInput = {
  /** Create document if it didn't exist */
  create: QuestionCreateInput
  /** Update document if it exists */
  update: QuestionUpdateInput
}

export type QuestionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<QuestionUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: QuestionWhereUniqueInput
}

export type QuestionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: QuestionUpsertInput
  /** Unique document search */
  where: QuestionWhereUniqueInput
}

/** Identifies documents */
export type QuestionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<QuestionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<QuestionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<QuestionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Question record uniquely */
export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']['output']
  b: Scalars['RGBAHue']['output']
  g: Scalars['RGBAHue']['output']
  r: Scalars['RGBAHue']['output']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input']
  b: Scalars['RGBAHue']['input']
  g: Scalars['RGBAHue']['input']
  r: Scalars['RGBAHue']['input']
}

export type RememberActionSection = {
  __typename?: 'RememberActionSection'
  /** Ao clicar no botão, para onde vai ser enviado? */
  buttonTarget: Scalars['String']['output']
  buttonText: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  logo: Asset
  /** System stage field */
  stage: Stage
  subtitle: Scalars['String']['output']
  title: Scalars['String']['output']
}

export type RememberActionSectionLogoArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type RememberActionSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: RememberActionSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type RememberActionSectionConnection = {
  __typename?: 'RememberActionSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<RememberActionSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type RememberActionSectionCreateInput = {
  buttonTarget: Scalars['String']['input']
  buttonText: Scalars['String']['input']
  logo: AssetCreateOneInlineInput
  subtitle: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type RememberActionSectionCreateManyInlineInput = {
  /** Create and connect multiple existing RememberActionSection documents */
  create?: InputMaybe<Array<RememberActionSectionCreateInput>>
}

export type RememberActionSectionCreateOneInlineInput = {
  /** Create and connect one RememberActionSection document */
  create?: InputMaybe<RememberActionSectionCreateInput>
}

export type RememberActionSectionCreateWithPositionInput = {
  /** Document to create */
  data: RememberActionSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type RememberActionSectionEdge = {
  __typename?: 'RememberActionSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: RememberActionSection
}

/** Identifies documents */
export type RememberActionSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum RememberActionSectionOrderByInput {
  ButtonTargetAsc = 'buttonTarget_ASC',
  ButtonTargetDesc = 'buttonTarget_DESC',
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type RememberActionSectionParent = Page

export type RememberActionSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type RememberActionSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type RememberActionSectionParentCreateManyInlineInput = {
  /** Connect multiple existing RememberActionSectionParent documents */
  connect?: InputMaybe<
    Array<RememberActionSectionParentWhereUniqueInput>
  >
  /** Create and connect multiple existing RememberActionSectionParent documents */
  create?: InputMaybe<Array<RememberActionSectionParentCreateInput>>
}

export type RememberActionSectionParentCreateOneInlineInput = {
  /** Connect one existing RememberActionSectionParent document */
  connect?: InputMaybe<RememberActionSectionParentWhereUniqueInput>
  /** Create and connect one RememberActionSectionParent document */
  create?: InputMaybe<RememberActionSectionParentCreateInput>
}

export type RememberActionSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type RememberActionSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing RememberActionSectionParent documents */
  connect?: InputMaybe<Array<RememberActionSectionParentConnectInput>>
  /** Create and connect multiple RememberActionSectionParent documents */
  create?: InputMaybe<Array<RememberActionSectionParentCreateInput>>
  /** Delete multiple RememberActionSectionParent documents */
  delete?: InputMaybe<
    Array<RememberActionSectionParentWhereUniqueInput>
  >
  /** Disconnect multiple RememberActionSectionParent documents */
  disconnect?: InputMaybe<
    Array<RememberActionSectionParentWhereUniqueInput>
  >
  /** Override currently-connected documents with multiple existing RememberActionSectionParent documents */
  set?: InputMaybe<Array<RememberActionSectionParentWhereUniqueInput>>
  /** Update multiple RememberActionSectionParent documents */
  update?: InputMaybe<
    Array<RememberActionSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple RememberActionSectionParent documents */
  upsert?: InputMaybe<
    Array<RememberActionSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type RememberActionSectionParentUpdateManyWithNestedWhereInput =
  {
    Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
  }

export type RememberActionSectionParentUpdateOneInlineInput = {
  /** Connect existing RememberActionSectionParent document */
  connect?: InputMaybe<RememberActionSectionParentWhereUniqueInput>
  /** Create and connect one RememberActionSectionParent document */
  create?: InputMaybe<RememberActionSectionParentCreateInput>
  /** Delete currently connected RememberActionSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected RememberActionSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single RememberActionSectionParent document */
  update?: InputMaybe<RememberActionSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single RememberActionSectionParent document */
  upsert?: InputMaybe<RememberActionSectionParentUpsertWithNestedWhereUniqueInput>
}

export type RememberActionSectionParentUpdateWithNestedWhereUniqueInput =
  {
    Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
  }

export type RememberActionSectionParentUpsertWithNestedWhereUniqueInput =
  {
    Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
  }

export type RememberActionSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type RememberActionSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type RememberActionSectionUpdateInput = {
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  logo?: InputMaybe<AssetUpdateOneInlineInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type RememberActionSectionUpdateManyInlineInput = {
  /** Create and connect multiple RememberActionSection component instances */
  create?: InputMaybe<
    Array<RememberActionSectionCreateWithPositionInput>
  >
  /** Delete multiple RememberActionSection documents */
  delete?: InputMaybe<Array<RememberActionSectionWhereUniqueInput>>
  /** Update multiple RememberActionSection component instances */
  update?: InputMaybe<
    Array<RememberActionSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple RememberActionSection component instances */
  upsert?: InputMaybe<
    Array<RememberActionSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type RememberActionSectionUpdateManyInput = {
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  subtitle?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type RememberActionSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: RememberActionSectionUpdateManyInput
  /** Document search */
  where: RememberActionSectionWhereInput
}

export type RememberActionSectionUpdateOneInlineInput = {
  /** Create and connect one RememberActionSection document */
  create?: InputMaybe<RememberActionSectionCreateInput>
  /** Delete currently connected RememberActionSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single RememberActionSection document */
  update?: InputMaybe<RememberActionSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single RememberActionSection document */
  upsert?: InputMaybe<RememberActionSectionUpsertWithNestedWhereUniqueInput>
}

export type RememberActionSectionUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<RememberActionSectionUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: RememberActionSectionWhereUniqueInput
  }

export type RememberActionSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: RememberActionSectionUpdateInput
  /** Unique document search */
  where: RememberActionSectionWhereUniqueInput
}

export type RememberActionSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: RememberActionSectionCreateInput
  /** Update document if it exists */
  update: RememberActionSectionUpdateInput
}

export type RememberActionSectionUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<RememberActionSectionUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: RememberActionSectionWhereUniqueInput
  }

export type RememberActionSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: RememberActionSectionUpsertInput
  /** Unique document search */
  where: RememberActionSectionWhereUniqueInput
}

/** Identifies documents */
export type RememberActionSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<RememberActionSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  buttonTarget?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonTarget_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonTarget_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonTarget_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonTarget_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonTarget_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonTarget_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonTarget_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonTarget_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  buttonTarget_starts_with?: InputMaybe<Scalars['String']['input']>
  buttonText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  buttonText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  buttonText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  buttonText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  buttonText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  buttonText_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  buttonText_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  buttonText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  buttonText_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  buttonText_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  logo?: InputMaybe<AssetWhereInput>
  subtitle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  subtitle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  subtitle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  subtitle_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  subtitle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  subtitle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  subtitle_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  subtitle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  subtitle_starts_with?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References RememberActionSection record uniquely */
export type RememberActionSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']['output']
  /** Returns Markdown representation */
  markdown: Scalars['String']['output']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation'
  affectedDocuments: Array<ScheduledOperationAffectedDocument>
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Operation description */
  description?: Maybe<Scalars['String']['output']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']['output']>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json']['output']
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>
  /** System stage field */
  stage: Stage
  /** operation Status */
  status: ScheduledOperationStatus
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Page
  | SubscriptionForm

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledOperationStatus>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledOperationStatus>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  /** Release description */
  description?: Maybe<Scalars['String']['output']>
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']['output']>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean']['output']
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean']['output']
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']['output']>
  /** System stage field */
  stage: Stage
  /** Release Status */
  status: ScheduledReleaseStatus
  /** Release Title */
  title?: Maybe<Scalars['String']['output']>
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
}

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledReleaseStatus>>
  >
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING',
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<
    Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<
    Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
  >
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<
    Array<InputMaybe<ScheduledReleaseStatus>>
  >
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type SocialLink = {
  __typename?: 'SocialLink'
  icon: Asset
  /** The unique identifier */
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  url: Scalars['String']['output']
}

export type SocialLinkIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type SocialLinkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SocialLinkWhereUniqueInput
}

/** A connection to a list of items. */
export type SocialLinkConnection = {
  __typename?: 'SocialLinkConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SocialLinkEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SocialLinkCreateInput = {
  icon: AssetCreateOneInlineInput
  name: Scalars['String']['input']
  url: Scalars['String']['input']
}

export type SocialLinkCreateManyInlineInput = {
  /** Create and connect multiple existing SocialLink documents */
  create?: InputMaybe<Array<SocialLinkCreateInput>>
}

export type SocialLinkCreateOneInlineInput = {
  /** Create and connect one SocialLink document */
  create?: InputMaybe<SocialLinkCreateInput>
}

export type SocialLinkCreateWithPositionInput = {
  /** Document to create */
  data: SocialLinkCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type SocialLinkEdge = {
  __typename?: 'SocialLinkEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: SocialLink
}

/** Identifies documents */
export type SocialLinkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum SocialLinkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export type SocialLinkParent = Footer | Testimonial

export type SocialLinkParentConnectInput = {
  Footer?: InputMaybe<FooterConnectInput>
  Testimonial?: InputMaybe<TestimonialConnectInput>
}

export type SocialLinkParentCreateInput = {
  Footer?: InputMaybe<FooterCreateInput>
  Testimonial?: InputMaybe<TestimonialCreateInput>
}

export type SocialLinkParentCreateManyInlineInput = {
  /** Create and connect multiple existing SocialLinkParent documents */
  create?: InputMaybe<Array<SocialLinkParentCreateInput>>
}

export type SocialLinkParentCreateOneInlineInput = {
  /** Create and connect one SocialLinkParent document */
  create?: InputMaybe<SocialLinkParentCreateInput>
}

export type SocialLinkParentCreateWithPositionInput = {
  Footer?: InputMaybe<FooterCreateWithPositionInput>
  Testimonial?: InputMaybe<TestimonialCreateWithPositionInput>
}

export type SocialLinkParentUpdateInput = {
  Footer?: InputMaybe<FooterUpdateInput>
  Testimonial?: InputMaybe<TestimonialUpdateInput>
}

export type SocialLinkParentUpdateManyInlineInput = {
  /** Create and connect multiple SocialLinkParent component instances */
  create?: InputMaybe<Array<SocialLinkParentCreateWithPositionInput>>
  /** Delete multiple SocialLinkParent documents */
  delete?: InputMaybe<Array<SocialLinkParentWhereUniqueInput>>
  /** Update multiple SocialLinkParent component instances */
  update?: InputMaybe<
    Array<SocialLinkParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple SocialLinkParent component instances */
  upsert?: InputMaybe<
    Array<SocialLinkParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type SocialLinkParentUpdateManyWithNestedWhereInput = {
  Footer?: InputMaybe<FooterUpdateManyWithNestedWhereInput>
  Testimonial?: InputMaybe<TestimonialUpdateManyWithNestedWhereInput>
}

export type SocialLinkParentUpdateOneInlineInput = {
  /** Create and connect one SocialLinkParent document */
  create?: InputMaybe<SocialLinkParentCreateInput>
  /** Delete currently connected SocialLinkParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single SocialLinkParent document */
  update?: InputMaybe<SocialLinkParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single SocialLinkParent document */
  upsert?: InputMaybe<SocialLinkParentUpsertWithNestedWhereUniqueInput>
}

export type SocialLinkParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueAndPositionInput>
    Testimonial?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type SocialLinkParentUpdateWithNestedWhereUniqueInput = {
  Footer?: InputMaybe<FooterUpdateWithNestedWhereUniqueInput>
  Testimonial?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>
}

export type SocialLinkParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueAndPositionInput>
    Testimonial?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type SocialLinkParentUpsertWithNestedWhereUniqueInput = {
  Footer?: InputMaybe<FooterUpsertWithNestedWhereUniqueInput>
  Testimonial?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>
}

export type SocialLinkParentWhereInput = {
  Footer?: InputMaybe<FooterWhereInput>
  Testimonial?: InputMaybe<TestimonialWhereInput>
}

export type SocialLinkParentWhereUniqueInput = {
  Footer?: InputMaybe<FooterWhereUniqueInput>
  Testimonial?: InputMaybe<TestimonialWhereUniqueInput>
}

export type SocialLinkUpdateInput = {
  icon?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type SocialLinkUpdateManyInlineInput = {
  /** Create and connect multiple SocialLink component instances */
  create?: InputMaybe<Array<SocialLinkCreateWithPositionInput>>
  /** Delete multiple SocialLink documents */
  delete?: InputMaybe<Array<SocialLinkWhereUniqueInput>>
  /** Update multiple SocialLink component instances */
  update?: InputMaybe<
    Array<SocialLinkUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple SocialLink component instances */
  upsert?: InputMaybe<
    Array<SocialLinkUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type SocialLinkUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type SocialLinkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SocialLinkUpdateManyInput
  /** Document search */
  where: SocialLinkWhereInput
}

export type SocialLinkUpdateOneInlineInput = {
  /** Create and connect one SocialLink document */
  create?: InputMaybe<SocialLinkCreateInput>
  /** Delete currently connected SocialLink document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single SocialLink document */
  update?: InputMaybe<SocialLinkUpdateWithNestedWhereUniqueInput>
  /** Upsert single SocialLink document */
  upsert?: InputMaybe<SocialLinkUpsertWithNestedWhereUniqueInput>
}

export type SocialLinkUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<SocialLinkUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: SocialLinkWhereUniqueInput
}

export type SocialLinkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SocialLinkUpdateInput
  /** Unique document search */
  where: SocialLinkWhereUniqueInput
}

export type SocialLinkUpsertInput = {
  /** Create document if it didn't exist */
  create: SocialLinkCreateInput
  /** Update document if it exists */
  update: SocialLinkUpdateInput
}

export type SocialLinkUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<SocialLinkUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: SocialLinkWhereUniqueInput
}

export type SocialLinkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SocialLinkUpsertInput
  /** Unique document search */
  where: SocialLinkWhereUniqueInput
}

/** Identifies documents */
export type SocialLinkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SocialLinkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References SocialLink record uniquely */
export type SocialLinkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED',
}

export type Step = {
  __typename?: 'Step'
  /** Descrição da etapa do processo seletivo */
  description: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Número da etapa no processo seletivo */
  number: Scalars['Int']['output']
  /** System stage field */
  stage: Stage
  /** Título da etapa do processo seletivo */
  title: Scalars['String']['output']
}

export type StepConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: StepWhereUniqueInput
}

/** A connection to a list of items. */
export type StepConnection = {
  __typename?: 'StepConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<StepEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type StepCreateInput = {
  description: Scalars['String']['input']
  number: Scalars['Int']['input']
  title: Scalars['String']['input']
}

export type StepCreateManyInlineInput = {
  /** Create and connect multiple existing Step documents */
  create?: InputMaybe<Array<StepCreateInput>>
}

export type StepCreateOneInlineInput = {
  /** Create and connect one Step document */
  create?: InputMaybe<StepCreateInput>
}

export type StepCreateWithPositionInput = {
  /** Document to create */
  data: StepCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type StepEdge = {
  __typename?: 'StepEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Step
}

/** Identifies documents */
export type StepManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  number_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  number_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  number_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  number_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  number_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  number_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum StepOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NumberAsc = 'number_ASC',
  NumberDesc = 'number_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type StepParent = StepSection

export type StepParentConnectInput = {
  StepSection?: InputMaybe<StepSectionConnectInput>
}

export type StepParentCreateInput = {
  StepSection?: InputMaybe<StepSectionCreateInput>
}

export type StepParentCreateManyInlineInput = {
  /** Create and connect multiple existing StepParent documents */
  create?: InputMaybe<Array<StepParentCreateInput>>
}

export type StepParentCreateOneInlineInput = {
  /** Create and connect one StepParent document */
  create?: InputMaybe<StepParentCreateInput>
}

export type StepParentCreateWithPositionInput = {
  StepSection?: InputMaybe<StepSectionCreateWithPositionInput>
}

export type StepParentUpdateInput = {
  StepSection?: InputMaybe<StepSectionUpdateInput>
}

export type StepParentUpdateManyInlineInput = {
  /** Create and connect multiple StepParent component instances */
  create?: InputMaybe<Array<StepParentCreateWithPositionInput>>
  /** Delete multiple StepParent documents */
  delete?: InputMaybe<Array<StepParentWhereUniqueInput>>
  /** Update multiple StepParent component instances */
  update?: InputMaybe<
    Array<StepParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple StepParent component instances */
  upsert?: InputMaybe<
    Array<StepParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type StepParentUpdateManyWithNestedWhereInput = {
  StepSection?: InputMaybe<StepSectionUpdateManyWithNestedWhereInput>
}

export type StepParentUpdateOneInlineInput = {
  /** Create and connect one StepParent document */
  create?: InputMaybe<StepParentCreateInput>
  /** Delete currently connected StepParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single StepParent document */
  update?: InputMaybe<StepParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single StepParent document */
  upsert?: InputMaybe<StepParentUpsertWithNestedWhereUniqueInput>
}

export type StepParentUpdateWithNestedWhereUniqueAndPositionInput = {
  StepSection?: InputMaybe<StepSectionUpdateWithNestedWhereUniqueAndPositionInput>
}

export type StepParentUpdateWithNestedWhereUniqueInput = {
  StepSection?: InputMaybe<StepSectionUpdateWithNestedWhereUniqueInput>
}

export type StepParentUpsertWithNestedWhereUniqueAndPositionInput = {
  StepSection?: InputMaybe<StepSectionUpsertWithNestedWhereUniqueAndPositionInput>
}

export type StepParentUpsertWithNestedWhereUniqueInput = {
  StepSection?: InputMaybe<StepSectionUpsertWithNestedWhereUniqueInput>
}

export type StepParentWhereInput = {
  StepSection?: InputMaybe<StepSectionWhereInput>
}

export type StepParentWhereUniqueInput = {
  StepSection?: InputMaybe<StepSectionWhereUniqueInput>
}

export type StepSection = {
  __typename?: 'StepSection'
  description: Scalars['String']['output']
  heading: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  stepsProcessSeletive: Array<Step>
}

export type StepSectionStepsProcessSeletiveArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<StepOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StepWhereInput>
}

export type StepSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: StepSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type StepSectionConnection = {
  __typename?: 'StepSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<StepSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type StepSectionCreateInput = {
  description: Scalars['String']['input']
  heading: Scalars['String']['input']
  sectionId: Scalars['String']['input']
  stepsProcessSeletive?: InputMaybe<StepCreateManyInlineInput>
}

export type StepSectionCreateManyInlineInput = {
  /** Create and connect multiple existing StepSection documents */
  create?: InputMaybe<Array<StepSectionCreateInput>>
}

export type StepSectionCreateOneInlineInput = {
  /** Create and connect one StepSection document */
  create?: InputMaybe<StepSectionCreateInput>
}

export type StepSectionCreateWithPositionInput = {
  /** Document to create */
  data: StepSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type StepSectionEdge = {
  __typename?: 'StepSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: StepSection
}

/** Identifies documents */
export type StepSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
  stepsProcessSeletive_every?: InputMaybe<StepWhereInput>
  stepsProcessSeletive_none?: InputMaybe<StepWhereInput>
  stepsProcessSeletive_some?: InputMaybe<StepWhereInput>
}

export enum StepSectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type StepSectionParent = Page

export type StepSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type StepSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type StepSectionParentCreateManyInlineInput = {
  /** Connect multiple existing StepSectionParent documents */
  connect?: InputMaybe<Array<StepSectionParentWhereUniqueInput>>
  /** Create and connect multiple existing StepSectionParent documents */
  create?: InputMaybe<Array<StepSectionParentCreateInput>>
}

export type StepSectionParentCreateOneInlineInput = {
  /** Connect one existing StepSectionParent document */
  connect?: InputMaybe<StepSectionParentWhereUniqueInput>
  /** Create and connect one StepSectionParent document */
  create?: InputMaybe<StepSectionParentCreateInput>
}

export type StepSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type StepSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing StepSectionParent documents */
  connect?: InputMaybe<Array<StepSectionParentConnectInput>>
  /** Create and connect multiple StepSectionParent documents */
  create?: InputMaybe<Array<StepSectionParentCreateInput>>
  /** Delete multiple StepSectionParent documents */
  delete?: InputMaybe<Array<StepSectionParentWhereUniqueInput>>
  /** Disconnect multiple StepSectionParent documents */
  disconnect?: InputMaybe<Array<StepSectionParentWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing StepSectionParent documents */
  set?: InputMaybe<Array<StepSectionParentWhereUniqueInput>>
  /** Update multiple StepSectionParent documents */
  update?: InputMaybe<
    Array<StepSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple StepSectionParent documents */
  upsert?: InputMaybe<
    Array<StepSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type StepSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type StepSectionParentUpdateOneInlineInput = {
  /** Connect existing StepSectionParent document */
  connect?: InputMaybe<StepSectionParentWhereUniqueInput>
  /** Create and connect one StepSectionParent document */
  create?: InputMaybe<StepSectionParentCreateInput>
  /** Delete currently connected StepSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected StepSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single StepSectionParent document */
  update?: InputMaybe<StepSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single StepSectionParent document */
  upsert?: InputMaybe<StepSectionParentUpsertWithNestedWhereUniqueInput>
}

export type StepSectionParentUpdateWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
}

export type StepSectionParentUpsertWithNestedWhereUniqueInput = {
  Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
}

export type StepSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type StepSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type StepSectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  stepsProcessSeletive?: InputMaybe<StepUpdateManyInlineInput>
}

export type StepSectionUpdateManyInlineInput = {
  /** Create and connect multiple StepSection component instances */
  create?: InputMaybe<Array<StepSectionCreateWithPositionInput>>
  /** Delete multiple StepSection documents */
  delete?: InputMaybe<Array<StepSectionWhereUniqueInput>>
  /** Update multiple StepSection component instances */
  update?: InputMaybe<
    Array<StepSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple StepSection component instances */
  upsert?: InputMaybe<
    Array<StepSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type StepSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type StepSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StepSectionUpdateManyInput
  /** Document search */
  where: StepSectionWhereInput
}

export type StepSectionUpdateOneInlineInput = {
  /** Create and connect one StepSection document */
  create?: InputMaybe<StepSectionCreateInput>
  /** Delete currently connected StepSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single StepSection document */
  update?: InputMaybe<StepSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single StepSection document */
  upsert?: InputMaybe<StepSectionUpsertWithNestedWhereUniqueInput>
}

export type StepSectionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StepSectionUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: StepSectionWhereUniqueInput
}

export type StepSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StepSectionUpdateInput
  /** Unique document search */
  where: StepSectionWhereUniqueInput
}

export type StepSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: StepSectionCreateInput
  /** Update document if it exists */
  update: StepSectionUpdateInput
}

export type StepSectionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StepSectionUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: StepSectionWhereUniqueInput
}

export type StepSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StepSectionUpsertInput
  /** Unique document search */
  where: StepSectionWhereUniqueInput
}

/** Identifies documents */
export type StepSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
  stepsProcessSeletive_every?: InputMaybe<StepWhereInput>
  stepsProcessSeletive_none?: InputMaybe<StepWhereInput>
  stepsProcessSeletive_some?: InputMaybe<StepWhereInput>
}

/** References StepSection record uniquely */
export type StepSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type StepUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type StepUpdateManyInlineInput = {
  /** Create and connect multiple Step component instances */
  create?: InputMaybe<Array<StepCreateWithPositionInput>>
  /** Delete multiple Step documents */
  delete?: InputMaybe<Array<StepWhereUniqueInput>>
  /** Update multiple Step component instances */
  update?: InputMaybe<
    Array<StepUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Step component instances */
  upsert?: InputMaybe<
    Array<StepUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type StepUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type StepUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StepUpdateManyInput
  /** Document search */
  where: StepWhereInput
}

export type StepUpdateOneInlineInput = {
  /** Create and connect one Step document */
  create?: InputMaybe<StepCreateInput>
  /** Delete currently connected Step document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Step document */
  update?: InputMaybe<StepUpdateWithNestedWhereUniqueInput>
  /** Upsert single Step document */
  upsert?: InputMaybe<StepUpsertWithNestedWhereUniqueInput>
}

export type StepUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<StepUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: StepWhereUniqueInput
}

export type StepUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StepUpdateInput
  /** Unique document search */
  where: StepWhereUniqueInput
}

export type StepUpsertInput = {
  /** Create document if it didn't exist */
  create: StepCreateInput
  /** Update document if it exists */
  update: StepUpdateInput
}

export type StepUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<StepUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: StepWhereUniqueInput
}

export type StepUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StepUpsertInput
  /** Unique document search */
  where: StepWhereUniqueInput
}

/** Identifies documents */
export type StepWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StepWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StepWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StepWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  number_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  number_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  number_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  number_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  number_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  number_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  number_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Int']['input']>>
  >
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Step record uniquely */
export type StepWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  number?: InputMaybe<Scalars['Int']['input']>
}

export type SubscriptionForm = Node & {
  __typename?: 'SubscriptionForm'
  aboutBestProject: Scalars['String']['output']
  aboutFeedback: Scalars['String']['output']
  age: Scalars['Int']['output']
  becauseParticipate: Scalars['String']['output']
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** User that created this document */
  createdBy?: Maybe<User>
  developmentSide: Scalars['String']['output']
  /** Get the document in other stages */
  documentInStages: Array<SubscriptionForm>
  email: Scalars['String']['output']
  fullName: Scalars['String']['output']
  github: Scalars['String']['output']
  /** List of SubscriptionForm versions */
  history: Array<Version>
  howDidYouKnow: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  interviewVideoUrl?: Maybe<Scalars['String']['output']>
  isTermsAccepted: Scalars['Boolean']['output']
  linkRepoBestProject: Scalars['String']['output']
  linkedin: Scalars['String']['output']
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** User that last published this document */
  publishedBy?: Maybe<User>
  reasonForSelected: Scalars['String']['output']
  repoChallenge?: Maybe<Scalars['String']['output']>
  scheduledIn: Array<ScheduledOperation>
  /** System stage field */
  stage: Stage
  timeLearning: Scalars['String']['output']
  timeManagement: Scalars['String']['output']
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
  /** User that last updated this document */
  updatedBy?: Maybe<User>
  youMotivation: Scalars['String']['output']
}

export type SubscriptionFormCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type SubscriptionFormDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type SubscriptionFormHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type SubscriptionFormPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type SubscriptionFormScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type SubscriptionFormUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type SubscriptionFormConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: SubscriptionFormWhereUniqueInput
}

/** A connection to a list of items. */
export type SubscriptionFormConnection = {
  __typename?: 'SubscriptionFormConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<SubscriptionFormEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type SubscriptionFormCreateInput = {
  aboutBestProject: Scalars['String']['input']
  aboutFeedback: Scalars['String']['input']
  age: Scalars['Int']['input']
  becauseParticipate: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  developmentSide: Scalars['String']['input']
  email: Scalars['String']['input']
  fullName: Scalars['String']['input']
  github: Scalars['String']['input']
  howDidYouKnow: Scalars['String']['input']
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>
  isTermsAccepted: Scalars['Boolean']['input']
  linkRepoBestProject: Scalars['String']['input']
  linkedin: Scalars['String']['input']
  reasonForSelected: Scalars['String']['input']
  repoChallenge?: InputMaybe<Scalars['String']['input']>
  timeLearning: Scalars['String']['input']
  timeManagement: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  youMotivation: Scalars['String']['input']
}

export type SubscriptionFormCreateManyInlineInput = {
  /** Connect multiple existing SubscriptionForm documents */
  connect?: InputMaybe<Array<SubscriptionFormWhereUniqueInput>>
  /** Create and connect multiple existing SubscriptionForm documents */
  create?: InputMaybe<Array<SubscriptionFormCreateInput>>
}

export type SubscriptionFormCreateOneInlineInput = {
  /** Connect one existing SubscriptionForm document */
  connect?: InputMaybe<SubscriptionFormWhereUniqueInput>
  /** Create and connect one SubscriptionForm document */
  create?: InputMaybe<SubscriptionFormCreateInput>
}

/** An edge in a connection. */
export type SubscriptionFormEdge = {
  __typename?: 'SubscriptionFormEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: SubscriptionForm
}

/** Identifies documents */
export type SubscriptionFormManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  aboutBestProject?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  aboutBestProject_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  aboutBestProject_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  aboutBestProject_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  aboutBestProject_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  aboutBestProject_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  aboutBestProject_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  aboutBestProject_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  aboutBestProject_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  aboutBestProject_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  aboutFeedback?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  aboutFeedback_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  aboutFeedback_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  aboutFeedback_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  aboutFeedback_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  aboutFeedback_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  aboutFeedback_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  aboutFeedback_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  aboutFeedback_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  aboutFeedback_starts_with?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  age_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  age_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  age_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  age_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  age_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  becauseParticipate?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  becauseParticipate_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  becauseParticipate_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are contained in given list. */
  becauseParticipate_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  becauseParticipate_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  becauseParticipate_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  becauseParticipate_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  becauseParticipate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  becauseParticipate_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  becauseParticipate_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  developmentSide?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  developmentSide_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  developmentSide_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  developmentSide_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  developmentSide_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  developmentSide_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  developmentSide_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  developmentSide_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  developmentSide_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  developmentSide_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<SubscriptionFormWhereStageInput>
  documentInStages_none?: InputMaybe<SubscriptionFormWhereStageInput>
  documentInStages_some?: InputMaybe<SubscriptionFormWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  fullName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>
  github?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  github_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']['input']>
  howDidYouKnow?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  howDidYouKnow_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  howDidYouKnow_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  howDidYouKnow_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  howDidYouKnow_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  howDidYouKnow_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  howDidYouKnow_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  howDidYouKnow_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  howDidYouKnow_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  howDidYouKnow_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  interviewVideoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  interviewVideoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  interviewVideoUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  interviewVideoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  interviewVideoUrl_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  interviewVideoUrl_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  interviewVideoUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  interviewVideoUrl_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  interviewVideoUrl_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  isTermsAccepted?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isTermsAccepted_not?: InputMaybe<Scalars['Boolean']['input']>
  linkRepoBestProject?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  linkRepoBestProject_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values ending with the given string. */
  linkRepoBestProject_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are contained in given list. */
  linkRepoBestProject_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  linkRepoBestProject_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  linkRepoBestProject_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  linkRepoBestProject_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  linkRepoBestProject_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  linkRepoBestProject_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  linkRepoBestProject_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  linkedin?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  linkedin_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  linkedin_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  linkedin_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  linkedin_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  linkedin_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  linkedin_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  linkedin_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  linkedin_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  linkedin_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  reasonForSelected?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  reasonForSelected_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  reasonForSelected_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  reasonForSelected_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  reasonForSelected_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  reasonForSelected_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  reasonForSelected_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  reasonForSelected_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  reasonForSelected_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  reasonForSelected_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  repoChallenge?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  repoChallenge_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  repoChallenge_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  repoChallenge_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  repoChallenge_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  repoChallenge_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  repoChallenge_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  repoChallenge_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  repoChallenge_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  repoChallenge_starts_with?: InputMaybe<Scalars['String']['input']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  timeLearning?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  timeLearning_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  timeLearning_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  timeLearning_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  timeLearning_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  timeLearning_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  timeLearning_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  timeLearning_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  timeLearning_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  timeLearning_starts_with?: InputMaybe<Scalars['String']['input']>
  timeManagement?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  timeManagement_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  timeManagement_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  timeManagement_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  timeManagement_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  timeManagement_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  timeManagement_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  timeManagement_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  timeManagement_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  timeManagement_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
  youMotivation?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  youMotivation_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  youMotivation_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  youMotivation_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  youMotivation_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  youMotivation_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  youMotivation_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  youMotivation_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  youMotivation_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  youMotivation_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum SubscriptionFormOrderByInput {
  AboutBestProjectAsc = 'aboutBestProject_ASC',
  AboutBestProjectDesc = 'aboutBestProject_DESC',
  AboutFeedbackAsc = 'aboutFeedback_ASC',
  AboutFeedbackDesc = 'aboutFeedback_DESC',
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  BecauseParticipateAsc = 'becauseParticipate_ASC',
  BecauseParticipateDesc = 'becauseParticipate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DevelopmentSideAsc = 'developmentSide_ASC',
  DevelopmentSideDesc = 'developmentSide_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  GithubAsc = 'github_ASC',
  GithubDesc = 'github_DESC',
  HowDidYouKnowAsc = 'howDidYouKnow_ASC',
  HowDidYouKnowDesc = 'howDidYouKnow_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InterviewVideoUrlAsc = 'interviewVideoUrl_ASC',
  InterviewVideoUrlDesc = 'interviewVideoUrl_DESC',
  IsTermsAcceptedAsc = 'isTermsAccepted_ASC',
  IsTermsAcceptedDesc = 'isTermsAccepted_DESC',
  LinkRepoBestProjectAsc = 'linkRepoBestProject_ASC',
  LinkRepoBestProjectDesc = 'linkRepoBestProject_DESC',
  LinkedinAsc = 'linkedin_ASC',
  LinkedinDesc = 'linkedin_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReasonForSelectedAsc = 'reasonForSelected_ASC',
  ReasonForSelectedDesc = 'reasonForSelected_DESC',
  RepoChallengeAsc = 'repoChallenge_ASC',
  RepoChallengeDesc = 'repoChallenge_DESC',
  TimeLearningAsc = 'timeLearning_ASC',
  TimeLearningDesc = 'timeLearning_DESC',
  TimeManagementAsc = 'timeManagement_ASC',
  TimeManagementDesc = 'timeManagement_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  YouMotivationAsc = 'youMotivation_ASC',
  YouMotivationDesc = 'youMotivation_DESC',
}

export type SubscriptionFormUpdateInput = {
  aboutBestProject?: InputMaybe<Scalars['String']['input']>
  aboutFeedback?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  becauseParticipate?: InputMaybe<Scalars['String']['input']>
  developmentSide?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  fullName?: InputMaybe<Scalars['String']['input']>
  github?: InputMaybe<Scalars['String']['input']>
  howDidYouKnow?: InputMaybe<Scalars['String']['input']>
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>
  isTermsAccepted?: InputMaybe<Scalars['Boolean']['input']>
  linkRepoBestProject?: InputMaybe<Scalars['String']['input']>
  linkedin?: InputMaybe<Scalars['String']['input']>
  reasonForSelected?: InputMaybe<Scalars['String']['input']>
  repoChallenge?: InputMaybe<Scalars['String']['input']>
  timeLearning?: InputMaybe<Scalars['String']['input']>
  timeManagement?: InputMaybe<Scalars['String']['input']>
  youMotivation?: InputMaybe<Scalars['String']['input']>
}

export type SubscriptionFormUpdateManyInlineInput = {
  /** Connect multiple existing SubscriptionForm documents */
  connect?: InputMaybe<Array<SubscriptionFormConnectInput>>
  /** Create and connect multiple SubscriptionForm documents */
  create?: InputMaybe<Array<SubscriptionFormCreateInput>>
  /** Delete multiple SubscriptionForm documents */
  delete?: InputMaybe<Array<SubscriptionFormWhereUniqueInput>>
  /** Disconnect multiple SubscriptionForm documents */
  disconnect?: InputMaybe<Array<SubscriptionFormWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing SubscriptionForm documents */
  set?: InputMaybe<Array<SubscriptionFormWhereUniqueInput>>
  /** Update multiple SubscriptionForm documents */
  update?: InputMaybe<
    Array<SubscriptionFormUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple SubscriptionForm documents */
  upsert?: InputMaybe<
    Array<SubscriptionFormUpsertWithNestedWhereUniqueInput>
  >
}

export type SubscriptionFormUpdateManyInput = {
  aboutBestProject?: InputMaybe<Scalars['String']['input']>
  aboutFeedback?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  becauseParticipate?: InputMaybe<Scalars['String']['input']>
  developmentSide?: InputMaybe<Scalars['String']['input']>
  fullName?: InputMaybe<Scalars['String']['input']>
  github?: InputMaybe<Scalars['String']['input']>
  howDidYouKnow?: InputMaybe<Scalars['String']['input']>
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>
  isTermsAccepted?: InputMaybe<Scalars['Boolean']['input']>
  linkRepoBestProject?: InputMaybe<Scalars['String']['input']>
  linkedin?: InputMaybe<Scalars['String']['input']>
  reasonForSelected?: InputMaybe<Scalars['String']['input']>
  repoChallenge?: InputMaybe<Scalars['String']['input']>
  timeLearning?: InputMaybe<Scalars['String']['input']>
  timeManagement?: InputMaybe<Scalars['String']['input']>
  youMotivation?: InputMaybe<Scalars['String']['input']>
}

export type SubscriptionFormUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SubscriptionFormUpdateManyInput
  /** Document search */
  where: SubscriptionFormWhereInput
}

export type SubscriptionFormUpdateOneInlineInput = {
  /** Connect existing SubscriptionForm document */
  connect?: InputMaybe<SubscriptionFormWhereUniqueInput>
  /** Create and connect one SubscriptionForm document */
  create?: InputMaybe<SubscriptionFormCreateInput>
  /** Delete currently connected SubscriptionForm document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected SubscriptionForm document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single SubscriptionForm document */
  update?: InputMaybe<SubscriptionFormUpdateWithNestedWhereUniqueInput>
  /** Upsert single SubscriptionForm document */
  upsert?: InputMaybe<SubscriptionFormUpsertWithNestedWhereUniqueInput>
}

export type SubscriptionFormUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SubscriptionFormUpdateInput
  /** Unique document search */
  where: SubscriptionFormWhereUniqueInput
}

export type SubscriptionFormUpsertInput = {
  /** Create document if it didn't exist */
  create: SubscriptionFormCreateInput
  /** Update document if it exists */
  update: SubscriptionFormUpdateInput
}

export type SubscriptionFormUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SubscriptionFormUpsertInput
  /** Unique document search */
  where: SubscriptionFormWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type SubscriptionFormWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type SubscriptionFormWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriptionFormWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  aboutBestProject?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  aboutBestProject_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  aboutBestProject_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  aboutBestProject_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  aboutBestProject_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  aboutBestProject_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  aboutBestProject_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  aboutBestProject_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  aboutBestProject_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  aboutBestProject_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  aboutFeedback?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  aboutFeedback_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  aboutFeedback_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  aboutFeedback_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  aboutFeedback_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  aboutFeedback_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  aboutFeedback_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  aboutFeedback_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  aboutFeedback_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  aboutFeedback_starts_with?: InputMaybe<Scalars['String']['input']>
  age?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than the given value. */
  age_gt?: InputMaybe<Scalars['Int']['input']>
  /** All values greater than or equal the given value. */
  age_gte?: InputMaybe<Scalars['Int']['input']>
  /** All values that are contained in given list. */
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  /** All values less than the given value. */
  age_lt?: InputMaybe<Scalars['Int']['input']>
  /** All values less than or equal the given value. */
  age_lte?: InputMaybe<Scalars['Int']['input']>
  /** Any other value that exists and is not equal to the given value. */
  age_not?: InputMaybe<Scalars['Int']['input']>
  /** All values that are not contained in given list. */
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  becauseParticipate?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  becauseParticipate_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  becauseParticipate_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are contained in given list. */
  becauseParticipate_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  becauseParticipate_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  becauseParticipate_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  becauseParticipate_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  becauseParticipate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  becauseParticipate_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  becauseParticipate_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  createdBy?: InputMaybe<UserWhereInput>
  developmentSide?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  developmentSide_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  developmentSide_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  developmentSide_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  developmentSide_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  developmentSide_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  developmentSide_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  developmentSide_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  developmentSide_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  developmentSide_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<SubscriptionFormWhereStageInput>
  documentInStages_none?: InputMaybe<SubscriptionFormWhereStageInput>
  documentInStages_some?: InputMaybe<SubscriptionFormWhereStageInput>
  email?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']['input']>
  fullName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fullName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fullName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fullName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  fullName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fullName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fullName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fullName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  fullName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fullName_starts_with?: InputMaybe<Scalars['String']['input']>
  github?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  github_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  github_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  github_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  github_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  github_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  github_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  github_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  github_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  github_starts_with?: InputMaybe<Scalars['String']['input']>
  howDidYouKnow?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  howDidYouKnow_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  howDidYouKnow_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  howDidYouKnow_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  howDidYouKnow_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  howDidYouKnow_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  howDidYouKnow_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  howDidYouKnow_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  howDidYouKnow_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  howDidYouKnow_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  interviewVideoUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  interviewVideoUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  interviewVideoUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  interviewVideoUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  interviewVideoUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  interviewVideoUrl_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  interviewVideoUrl_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  interviewVideoUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  interviewVideoUrl_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  interviewVideoUrl_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  isTermsAccepted?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isTermsAccepted_not?: InputMaybe<Scalars['Boolean']['input']>
  linkRepoBestProject?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  linkRepoBestProject_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values ending with the given string. */
  linkRepoBestProject_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are contained in given list. */
  linkRepoBestProject_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  linkRepoBestProject_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  linkRepoBestProject_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  linkRepoBestProject_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  linkRepoBestProject_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  linkRepoBestProject_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  linkRepoBestProject_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  linkedin?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  linkedin_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  linkedin_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  linkedin_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  linkedin_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  linkedin_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  linkedin_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  linkedin_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  linkedin_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  linkedin_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  reasonForSelected?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  reasonForSelected_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  reasonForSelected_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  reasonForSelected_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  reasonForSelected_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  reasonForSelected_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  reasonForSelected_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  reasonForSelected_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  reasonForSelected_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  reasonForSelected_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  repoChallenge?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  repoChallenge_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  repoChallenge_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  repoChallenge_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  repoChallenge_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  repoChallenge_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  repoChallenge_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  repoChallenge_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  repoChallenge_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  repoChallenge_starts_with?: InputMaybe<Scalars['String']['input']>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  timeLearning?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  timeLearning_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  timeLearning_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  timeLearning_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  timeLearning_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  timeLearning_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  timeLearning_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  timeLearning_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  timeLearning_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  timeLearning_starts_with?: InputMaybe<Scalars['String']['input']>
  timeManagement?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  timeManagement_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  timeManagement_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  timeManagement_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  timeManagement_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  timeManagement_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  timeManagement_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  timeManagement_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  timeManagement_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  timeManagement_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedBy?: InputMaybe<UserWhereInput>
  youMotivation?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  youMotivation_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  youMotivation_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  youMotivation_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  youMotivation_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  youMotivation_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  youMotivation_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  youMotivation_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  youMotivation_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  youMotivation_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type SubscriptionFormWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SubscriptionFormWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SubscriptionFormWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SubscriptionFormWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<SubscriptionFormWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References SubscriptionForm record uniquely */
export type SubscriptionFormWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION',
}

export type Testimonial = {
  __typename?: 'Testimonial'
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** URL da imagem do Github */
  imgUrl: Scalars['String']['output']
  name: Scalars['String']['output']
  socialLinks: Array<SocialLink>
  /** System stage field */
  stage: Stage
  /** Todos precisam ter o mesmo número de linhas de texto */
  testimonialText: Scalars['String']['output']
}

export type TestimonialSocialLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<SocialLinkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SocialLinkWhereInput>
}

export type TestimonialConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: TestimonialWhereUniqueInput
}

/** A connection to a list of items. */
export type TestimonialConnection = {
  __typename?: 'TestimonialConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<TestimonialEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type TestimonialCreateInput = {
  imgUrl: Scalars['String']['input']
  name: Scalars['String']['input']
  socialLinks?: InputMaybe<SocialLinkCreateManyInlineInput>
  testimonialText: Scalars['String']['input']
}

export type TestimonialCreateManyInlineInput = {
  /** Create and connect multiple existing Testimonial documents */
  create?: InputMaybe<Array<TestimonialCreateInput>>
}

export type TestimonialCreateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>
}

export type TestimonialCreateWithPositionInput = {
  /** Document to create */
  data: TestimonialCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type TestimonialEdge = {
  __typename?: 'TestimonialEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Testimonial
}

/** Identifies documents */
export type TestimonialManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imgUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  imgUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  imgUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  imgUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  imgUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  imgUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  imgUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  imgUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  imgUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  imgUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>
  testimonialText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  testimonialText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  testimonialText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  testimonialText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  testimonialText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  testimonialText_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  testimonialText_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  testimonialText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  testimonialText_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  testimonialText_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum TestimonialOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImgUrlAsc = 'imgUrl_ASC',
  ImgUrlDesc = 'imgUrl_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TestimonialTextAsc = 'testimonialText_ASC',
  TestimonialTextDesc = 'testimonialText_DESC',
}

export type TestimonialParent = TestimonialSection

export type TestimonialParentConnectInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionConnectInput>
}

export type TestimonialParentCreateInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionCreateInput>
}

export type TestimonialParentCreateManyInlineInput = {
  /** Create and connect multiple existing TestimonialParent documents */
  create?: InputMaybe<Array<TestimonialParentCreateInput>>
}

export type TestimonialParentCreateOneInlineInput = {
  /** Create and connect one TestimonialParent document */
  create?: InputMaybe<TestimonialParentCreateInput>
}

export type TestimonialParentCreateWithPositionInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionCreateWithPositionInput>
}

export type TestimonialParentUpdateInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionUpdateInput>
}

export type TestimonialParentUpdateManyInlineInput = {
  /** Create and connect multiple TestimonialParent component instances */
  create?: InputMaybe<Array<TestimonialParentCreateWithPositionInput>>
  /** Delete multiple TestimonialParent documents */
  delete?: InputMaybe<Array<TestimonialParentWhereUniqueInput>>
  /** Update multiple TestimonialParent component instances */
  update?: InputMaybe<
    Array<TestimonialParentUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple TestimonialParent component instances */
  upsert?: InputMaybe<
    Array<TestimonialParentUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type TestimonialParentUpdateManyWithNestedWhereInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionUpdateManyWithNestedWhereInput>
}

export type TestimonialParentUpdateOneInlineInput = {
  /** Create and connect one TestimonialParent document */
  create?: InputMaybe<TestimonialParentCreateInput>
  /** Delete currently connected TestimonialParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single TestimonialParent document */
  update?: InputMaybe<TestimonialParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single TestimonialParent document */
  upsert?: InputMaybe<TestimonialParentUpsertWithNestedWhereUniqueInput>
}

export type TestimonialParentUpdateWithNestedWhereUniqueAndPositionInput =
  {
    TestimonialSection?: InputMaybe<TestimonialSectionUpdateWithNestedWhereUniqueAndPositionInput>
  }

export type TestimonialParentUpdateWithNestedWhereUniqueInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionUpdateWithNestedWhereUniqueInput>
}

export type TestimonialParentUpsertWithNestedWhereUniqueAndPositionInput =
  {
    TestimonialSection?: InputMaybe<TestimonialSectionUpsertWithNestedWhereUniqueAndPositionInput>
  }

export type TestimonialParentUpsertWithNestedWhereUniqueInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionUpsertWithNestedWhereUniqueInput>
}

export type TestimonialParentWhereInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionWhereInput>
}

export type TestimonialParentWhereUniqueInput = {
  TestimonialSection?: InputMaybe<TestimonialSectionWhereUniqueInput>
}

export type TestimonialSection = {
  __typename?: 'TestimonialSection'
  description: Scalars['String']['output']
  heading: Scalars['String']['output']
  /** The unique identifier */
  id: Scalars['ID']['output']
  sectionId: Scalars['String']['output']
  /** System stage field */
  stage: Stage
  testimonials: Array<Testimonial>
}

export type TestimonialSectionTestimonialsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<TestimonialOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TestimonialWhereInput>
}

export type TestimonialSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: TestimonialSectionWhereUniqueInput
}

/** A connection to a list of items. */
export type TestimonialSectionConnection = {
  __typename?: 'TestimonialSectionConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<TestimonialSectionEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type TestimonialSectionCreateInput = {
  description: Scalars['String']['input']
  heading: Scalars['String']['input']
  sectionId: Scalars['String']['input']
  testimonials?: InputMaybe<TestimonialCreateManyInlineInput>
}

export type TestimonialSectionCreateManyInlineInput = {
  /** Create and connect multiple existing TestimonialSection documents */
  create?: InputMaybe<Array<TestimonialSectionCreateInput>>
}

export type TestimonialSectionCreateOneInlineInput = {
  /** Create and connect one TestimonialSection document */
  create?: InputMaybe<TestimonialSectionCreateInput>
}

export type TestimonialSectionCreateWithPositionInput = {
  /** Document to create */
  data: TestimonialSectionCreateInput
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
}

/** An edge in a connection. */
export type TestimonialSectionEdge = {
  __typename?: 'TestimonialSectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: TestimonialSection
}

/** Identifies documents */
export type TestimonialSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
  testimonials_every?: InputMaybe<TestimonialWhereInput>
  testimonials_none?: InputMaybe<TestimonialWhereInput>
  testimonials_some?: InputMaybe<TestimonialWhereInput>
}

export enum TestimonialSectionOrderByInput {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SectionIdAsc = 'sectionId_ASC',
  SectionIdDesc = 'sectionId_DESC',
}

export type TestimonialSectionParent = Page

export type TestimonialSectionParentConnectInput = {
  Page?: InputMaybe<PageConnectInput>
}

export type TestimonialSectionParentCreateInput = {
  Page?: InputMaybe<PageCreateInput>
}

export type TestimonialSectionParentCreateManyInlineInput = {
  /** Connect multiple existing TestimonialSectionParent documents */
  connect?: InputMaybe<
    Array<TestimonialSectionParentWhereUniqueInput>
  >
  /** Create and connect multiple existing TestimonialSectionParent documents */
  create?: InputMaybe<Array<TestimonialSectionParentCreateInput>>
}

export type TestimonialSectionParentCreateOneInlineInput = {
  /** Connect one existing TestimonialSectionParent document */
  connect?: InputMaybe<TestimonialSectionParentWhereUniqueInput>
  /** Create and connect one TestimonialSectionParent document */
  create?: InputMaybe<TestimonialSectionParentCreateInput>
}

export type TestimonialSectionParentUpdateInput = {
  Page?: InputMaybe<PageUpdateInput>
}

export type TestimonialSectionParentUpdateManyInlineInput = {
  /** Connect multiple existing TestimonialSectionParent documents */
  connect?: InputMaybe<Array<TestimonialSectionParentConnectInput>>
  /** Create and connect multiple TestimonialSectionParent documents */
  create?: InputMaybe<Array<TestimonialSectionParentCreateInput>>
  /** Delete multiple TestimonialSectionParent documents */
  delete?: InputMaybe<Array<TestimonialSectionParentWhereUniqueInput>>
  /** Disconnect multiple TestimonialSectionParent documents */
  disconnect?: InputMaybe<
    Array<TestimonialSectionParentWhereUniqueInput>
  >
  /** Override currently-connected documents with multiple existing TestimonialSectionParent documents */
  set?: InputMaybe<Array<TestimonialSectionParentWhereUniqueInput>>
  /** Update multiple TestimonialSectionParent documents */
  update?: InputMaybe<
    Array<TestimonialSectionParentUpdateWithNestedWhereUniqueInput>
  >
  /** Upsert multiple TestimonialSectionParent documents */
  upsert?: InputMaybe<
    Array<TestimonialSectionParentUpsertWithNestedWhereUniqueInput>
  >
}

export type TestimonialSectionParentUpdateManyWithNestedWhereInput = {
  Page?: InputMaybe<PageUpdateManyWithNestedWhereInput>
}

export type TestimonialSectionParentUpdateOneInlineInput = {
  /** Connect existing TestimonialSectionParent document */
  connect?: InputMaybe<TestimonialSectionParentWhereUniqueInput>
  /** Create and connect one TestimonialSectionParent document */
  create?: InputMaybe<TestimonialSectionParentCreateInput>
  /** Delete currently connected TestimonialSectionParent document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected TestimonialSectionParent document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single TestimonialSectionParent document */
  update?: InputMaybe<TestimonialSectionParentUpdateWithNestedWhereUniqueInput>
  /** Upsert single TestimonialSectionParent document */
  upsert?: InputMaybe<TestimonialSectionParentUpsertWithNestedWhereUniqueInput>
}

export type TestimonialSectionParentUpdateWithNestedWhereUniqueInput =
  {
    Page?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>
  }

export type TestimonialSectionParentUpsertWithNestedWhereUniqueInput =
  {
    Page?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>
  }

export type TestimonialSectionParentWhereInput = {
  Page?: InputMaybe<PageWhereInput>
}

export type TestimonialSectionParentWhereUniqueInput = {
  Page?: InputMaybe<PageWhereUniqueInput>
}

export type TestimonialSectionUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  testimonials?: InputMaybe<TestimonialUpdateManyInlineInput>
}

export type TestimonialSectionUpdateManyInlineInput = {
  /** Create and connect multiple TestimonialSection component instances */
  create?: InputMaybe<
    Array<TestimonialSectionCreateWithPositionInput>
  >
  /** Delete multiple TestimonialSection documents */
  delete?: InputMaybe<Array<TestimonialSectionWhereUniqueInput>>
  /** Update multiple TestimonialSection component instances */
  update?: InputMaybe<
    Array<TestimonialSectionUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple TestimonialSection component instances */
  upsert?: InputMaybe<
    Array<TestimonialSectionUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type TestimonialSectionUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
}

export type TestimonialSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialSectionUpdateManyInput
  /** Document search */
  where: TestimonialSectionWhereInput
}

export type TestimonialSectionUpdateOneInlineInput = {
  /** Create and connect one TestimonialSection document */
  create?: InputMaybe<TestimonialSectionCreateInput>
  /** Delete currently connected TestimonialSection document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single TestimonialSection document */
  update?: InputMaybe<TestimonialSectionUpdateWithNestedWhereUniqueInput>
  /** Upsert single TestimonialSection document */
  upsert?: InputMaybe<TestimonialSectionUpsertWithNestedWhereUniqueInput>
}

export type TestimonialSectionUpdateWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to update */
    data?: InputMaybe<TestimonialSectionUpdateInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: TestimonialSectionWhereUniqueInput
  }

export type TestimonialSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialSectionUpdateInput
  /** Unique document search */
  where: TestimonialSectionWhereUniqueInput
}

export type TestimonialSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialSectionCreateInput
  /** Update document if it exists */
  update: TestimonialSectionUpdateInput
}

export type TestimonialSectionUpsertWithNestedWhereUniqueAndPositionInput =
  {
    /** Document to upsert */
    data?: InputMaybe<TestimonialSectionUpsertInput>
    /** Position in the list of existing component instances, will default to appending at the end of list */
    position?: InputMaybe<ConnectPositionInput>
    /** Unique component instance search */
    where: TestimonialSectionWhereUniqueInput
  }

export type TestimonialSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialSectionUpsertInput
  /** Unique document search */
  where: TestimonialSectionWhereUniqueInput
}

/** Identifies documents */
export type TestimonialSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialSectionWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  heading?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  sectionId?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  sectionId_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  sectionId_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  sectionId_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  sectionId_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  sectionId_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  sectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  sectionId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  sectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  sectionId_starts_with?: InputMaybe<Scalars['String']['input']>
  testimonials_every?: InputMaybe<TestimonialWhereInput>
  testimonials_none?: InputMaybe<TestimonialWhereInput>
  testimonials_some?: InputMaybe<TestimonialWhereInput>
}

/** References TestimonialSection record uniquely */
export type TestimonialSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type TestimonialUpdateInput = {
  imgUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  socialLinks?: InputMaybe<SocialLinkUpdateManyInlineInput>
  testimonialText?: InputMaybe<Scalars['String']['input']>
}

export type TestimonialUpdateManyInlineInput = {
  /** Create and connect multiple Testimonial component instances */
  create?: InputMaybe<Array<TestimonialCreateWithPositionInput>>
  /** Delete multiple Testimonial documents */
  delete?: InputMaybe<Array<TestimonialWhereUniqueInput>>
  /** Update multiple Testimonial component instances */
  update?: InputMaybe<
    Array<TestimonialUpdateWithNestedWhereUniqueAndPositionInput>
  >
  /** Upsert multiple Testimonial component instances */
  upsert?: InputMaybe<
    Array<TestimonialUpsertWithNestedWhereUniqueAndPositionInput>
  >
}

export type TestimonialUpdateManyInput = {
  imgUrl?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  testimonialText?: InputMaybe<Scalars['String']['input']>
}

export type TestimonialUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TestimonialUpdateManyInput
  /** Document search */
  where: TestimonialWhereInput
}

export type TestimonialUpdateOneInlineInput = {
  /** Create and connect one Testimonial document */
  create?: InputMaybe<TestimonialCreateInput>
  /** Delete currently connected Testimonial document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Testimonial document */
  update?: InputMaybe<TestimonialUpdateWithNestedWhereUniqueInput>
  /** Upsert single Testimonial document */
  upsert?: InputMaybe<TestimonialUpsertWithNestedWhereUniqueInput>
}

export type TestimonialUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TestimonialUpdateInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: TestimonialWhereUniqueInput
}

export type TestimonialUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TestimonialUpdateInput
  /** Unique document search */
  where: TestimonialWhereUniqueInput
}

export type TestimonialUpsertInput = {
  /** Create document if it didn't exist */
  create: TestimonialCreateInput
  /** Update document if it exists */
  update: TestimonialUpdateInput
}

export type TestimonialUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TestimonialUpsertInput>
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Unique component instance search */
  where: TestimonialWhereUniqueInput
}

export type TestimonialUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TestimonialUpsertInput
  /** Unique document search */
  where: TestimonialWhereUniqueInput
}

/** Identifies documents */
export type TestimonialWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TestimonialWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TestimonialWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TestimonialWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imgUrl?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  imgUrl_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  imgUrl_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  imgUrl_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  imgUrl_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  imgUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  imgUrl_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  imgUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  imgUrl_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  imgUrl_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  socialLinks_every?: InputMaybe<SocialLinkWhereInput>
  socialLinks_none?: InputMaybe<SocialLinkWhereInput>
  socialLinks_some?: InputMaybe<SocialLinkWhereInput>
  testimonialText?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  testimonialText_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  testimonialText_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  testimonialText_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  testimonialText_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  testimonialText_not_contains?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values not ending with the given string */
  testimonialText_not_ends_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values that are not contained in given list. */
  testimonialText_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  testimonialText_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >
  /** All values starting with the given string. */
  testimonialText_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** References Testimonial record uniquely */
export type TestimonialWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Node & {
  __typename?: 'User'
  /** The time the document was created */
  createdAt: Scalars['DateTime']['output']
  /** Get the document in other stages */
  documentInStages: Array<User>
  /** The unique identifier */
  id: Scalars['ID']['output']
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean']['output']
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind
  /** The username */
  name: Scalars['String']['output']
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']['output']>
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  /** System stage field */
  stage: Stage
  /** The time the document was updated */
  updatedAt: Scalars['DateTime']['output']
}

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK',
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']['input']
  revision: Scalars['Int']['input']
  stage: Stage
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some',
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual',
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert',
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one',
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update',
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union',
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization',
}

export type MainQueryVariables = Exact<{ [key: string]: never }>

export type MainQuery = {
  __typename?: 'Query'
  pages: Array<{
    __typename?: 'Page'
    header: {
      __typename?: 'Header'
      buttonTarget: string
      buttonText: string
      logo: {
        __typename?: 'Asset'
        description?: string | null
        url: string
      }
      navigationLinks: Array<{
        __typename?: 'NavigationItem'
        label: string
        target: string
      }>
    }
    hero: {
      __typename?: 'Hero'
      buttonTarget: string
      buttonText: string
      subtitle: string
      logo: {
        __typename?: 'Asset'
        description?: string | null
        url: string
      }
      backgroundDesktop: { __typename?: 'Asset'; url: string }
      backgroundMobile: { __typename?: 'Asset'; url: string }
      title: { __typename?: 'RichText'; html: string }
    }
    aboutSection: {
      __typename?: 'AboutSection'
      sectionId: string
      heading: string
      description: { __typename?: 'RichText'; html: string }
    }
    stepsSection: {
      __typename?: 'StepSection'
      sectionId: string
      heading: string
      description: string
      stepsProcessSeletive: Array<{
        __typename?: 'Step'
        description: string
        number: number
        title: string
        id: string
      }>
    }
    rememberActionSection: {
      __typename?: 'RememberActionSection'
      buttonText: string
      buttonTarget: string
      subtitle: string
      title: string
      logo: {
        __typename?: 'Asset'
        description?: string | null
        url: string
      }
    }
    pillarsSection: {
      __typename?: 'PillarSection'
      sectionId: string
      heading: string
      description: string
      methodologys: Array<{
        __typename?: 'Methodology'
        id: string
        name: string
        description: string
      }>
    }
    benefitsSection: {
      __typename?: 'BenefitSection'
      sectionId: string
      heading: string
      description: string
      highlights: Array<{
        __typename?: 'Highlight'
        description: string
        stage: Stage
        title: string
        id: string
        icon: {
          __typename?: 'Asset'
          description?: string | null
          url: string
        }
      }>
    }
    testimonialSection: {
      __typename?: 'TestimonialSection'
      sectionId: string
      heading: string
      description: string
      testimonials: Array<{
        __typename?: 'Testimonial'
        id: string
        imgUrl: string
        name: string
        testimonialText: string
        socialLinks: Array<{
          __typename?: 'SocialLink'
          id: string
          name: string
          url: string
          icon: { __typename?: 'Asset'; url: string }
        }>
      }>
    }
    faqSection: {
      __typename?: 'FaqSection'
      sectionId: string
      heading: string
      questions: Array<{
        __typename?: 'Question'
        title: string
        content: { __typename?: 'RichText'; html: string }
      }>
    }
    footer: {
      __typename?: 'Footer'
      companySlogan: string
      companyName: string
      logo: {
        __typename?: 'Asset'
        description?: string | null
        url: string
      }
      socialLinks: Array<{
        __typename?: 'SocialLink'
        id: string
        name: string
        url: string
        icon: { __typename?: 'Asset'; url: string }
      }>
      navigationMenuLinks: Array<{
        __typename?: 'NavigationMenuLink'
        id: string
        title: string
        links: Array<{
          __typename?: 'Link'
          label: string
          target: string
        }>
      }>
    }
  }>
}

export const MainDocument = gql`
  query Main {
    pages {
      header {
        logo {
          description
          url
        }
        navigationLinks {
          label
          target
        }
        buttonTarget
        buttonText
      }
      hero {
        logo {
          description
          url
        }
        buttonTarget
        buttonText
        backgroundDesktop {
          url
        }
        backgroundMobile {
          url
        }
        title {
          html
        }
        subtitle
      }
      aboutSection {
        sectionId
        heading
        description {
          html
        }
      }
      stepsSection {
        sectionId
        heading
        description
        stepsProcessSeletive {
          description
          number
          title
          id
        }
      }
      rememberActionSection {
        buttonText
        buttonTarget
        subtitle
        title
        logo {
          description
          url
        }
      }
      pillarsSection {
        sectionId
        heading
        description
        methodologys {
          id
          name
          description
        }
      }
      benefitsSection {
        sectionId
        heading
        description
        highlights {
          description
          stage
          title
          id
          icon {
            description
            url
          }
        }
      }
      testimonialSection {
        sectionId
        heading
        description
        testimonials {
          id
          imgUrl
          name
          testimonialText
          socialLinks {
            id
            name
            icon {
              url
            }
            url
          }
        }
      }
      faqSection {
        sectionId
        heading
        questions {
          title
          content {
            html
          }
        }
      }
      footer {
        companySlogan
        companyName
        logo {
          description
          url
        }
        socialLinks {
          icon {
            url
          }
          id
          name
          url
        }
        navigationMenuLinks {
          id
          title
          links {
            label
            target
          }
        }
      }
    }
  }
`

/**
 * __useMainQuery__
 *
 * To run a query within a React component, call `useMainQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainQuery({
 *   variables: {
 *   },
 * });
 */
export function useMainQuery(
  baseOptions?: Apollo.QueryHookOptions<
    MainQuery,
    MainQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MainQuery, MainQueryVariables>(
    MainDocument,
    options,
  )
}
export function useMainLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MainQuery,
    MainQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MainQuery, MainQueryVariables>(
    MainDocument,
    options,
  )
}
export type MainQueryHookResult = ReturnType<typeof useMainQuery>
export type MainLazyQueryHookResult = ReturnType<
  typeof useMainLazyQuery
>
export type MainQueryResult = Apollo.QueryResult<
  MainQuery,
  MainQueryVariables
>
