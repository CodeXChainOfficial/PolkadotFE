import {
  BinaryCodec,
  ResultsParser,
  StringValue,
  ArrayVec,
  ArrayVecType,
  StructType,
  FieldDefinition,
  Field,
  StringType,
  U64Type,
  Struct,
  ContractFunction,
  OptionType,
  TokenIdentifierType,
  BigUIntType,
  AbiRegistry,
} from "@multiversx/sdk-core"

import { ApiNetworkProvider } from "@multiversx/sdk-network-providers/out"
import { xNamesContract } from "app/containers/Blockchain/contracts/xNames"

import abiJson from "app/containers/Blockchain/contracts/xNames/abi.json"

export const getDomain = async (domain: string, apiAddress: string) => {
  const networkProvider = new ApiNetworkProvider(apiAddress)

  let query = xNamesContract.createQuery({
    func: new ContractFunction("get_domain"),
    args: [new StringValue(domain)],
  })

  let queryResponse = await networkProvider.queryContract(query)

  let bundle = new ResultsParser().parseUntypedQueryResponse(queryResponse)
  let firstValue = bundle.values[0]

  let decodedValue = new BinaryCodec().decodeTopLevel(firstValue, domainType)
  // console.log(decodedValue.valueOf())
  return decodedValue.valueOf()
}

export const getSubDomains = async (domain: string, apiAddress: string) => {
  let query = xNamesContract.createQuery({
    func: new ContractFunction("get_sub_domains"),
    args: [new StringValue(domain)],
  })

  const networkProvider = new ApiNetworkProvider(apiAddress)

  const abiRegistry = AbiRegistry.create(abiJson)

  let queryResponse = await networkProvider.queryContract(query)
  const getDomainNameEndpoint = abiRegistry.getEndpoint("get_sub_domains")
  let { values } = new ResultsParser().parseQueryResponse(queryResponse, getDomainNameEndpoint)

  // console.log((values[0] as any).items[0].items)
  console.log((values[0] as any).items[0].items[0].value.toString())
}

export const getEgldPrice = async (apiAddress: string) => {
  let query = xNamesContract.createQuery({
    func: new ContractFunction("get_egld_usd_price"),
    args: [],
  })

  const networkProvider = new ApiNetworkProvider(apiAddress)

  let queryResponse = await networkProvider.queryContract(query)
  let bundle = new ResultsParser().parseUntypedQueryResponse(queryResponse)
  let firstValue = bundle.values[0]
  let decodedValue = new BinaryCodec().decodeTopLevel(firstValue, new BigUIntType())

  return decodedValue.valueOf().toFixed()
}

export const getDomainNftId = async (apiAddress: string) => {
  let query = xNamesContract.createQuery({
    func: new ContractFunction("get_domain_nft_id"),
    args: [],
  })

  const networkProvider = new ApiNetworkProvider(apiAddress)

  let queryResponse = await networkProvider.queryContract(query)
  let bundle = new ResultsParser().parseUntypedQueryResponse(queryResponse)
  let firstValue = bundle.values[0]
  let decodedValue = new BinaryCodec().decodeTopLevel(firstValue, new TokenIdentifierType())

  // console.log(firstValue)
  // console.log(decodedValue.valueOf())
  return decodedValue.valueOf()
}

export let profileType = new StructType("profile", [
  new FieldDefinition("name", "", new StringType()),
  new FieldDefinition("avatar", "", new StringType()),
  new FieldDefinition("location", "", new StringType()),
  new FieldDefinition("website", "", new StringType()),
  new FieldDefinition("shortbio", "", new StringType()),
])

export let socialType = new StructType("social", [
  new FieldDefinition("telegram", "", new StringType()),
  new FieldDefinition("discord", "", new StringType()),
  new FieldDefinition("twitter", "", new StringType()),
  new FieldDefinition("medium", "", new StringType()),
  new FieldDefinition("facebook", "", new StringType()),
  new FieldDefinition("other_link", "", new StringType()),
])

export let textRecordType = new StructType("textrecord", [
  new FieldDefinition("name_value", "", new StringType()),
  new FieldDefinition("link", "", new StringType()),
])
export let textRecordsType = new ArrayVecType(1, textRecordType)

export let walletsType = new StructType("wallets", [
  new FieldDefinition("egld", "", new StringType()),
  new FieldDefinition("btc", "", new StringType()),
  new FieldDefinition("eth", "", new StringType()),
])

export let domainType = new StructType("domain", [
  new FieldDefinition("name", "", new StringType()),
  new FieldDefinition("expires_at", "", new U64Type()),
  new FieldDefinition("nft_nonce", "", new U64Type()),
  new FieldDefinition("profile", "", new OptionType(profileType)),
  new FieldDefinition("social_media", "", new OptionType(socialType)),
  new FieldDefinition("wallets", "", new OptionType(walletsType)),
  new FieldDefinition("text_record", "", new OptionType(textRecordsType)),
])

export const profileStruct = new Struct(profileType, [
  new Field(new StringValue("Marko"), "name"),
  new Field(new StringValue("avatar"), "avatar"),
  new Field(new StringValue("Serbia"), "location"),
  new Field(new StringValue("https://facebook.io"), "website"),
  new Field(new StringValue("Dev"), "shortbio"),
])

export const socialStruct = new Struct(socialType, [
  new Field(new StringValue("https://telegram.com/marko"), "telegram"),
  new Field(new StringValue("https://discord.com/marko"), "discord"),
  new Field(new StringValue("https://twitter.com/marko"), "twitter"),
  new Field(new StringValue("https://medium.io/marko"), "medium"),
  new Field(new StringValue("https://facebook.io"), "facebook"),
  new Field(new StringValue("https://sample.dev.io/marko"), "other_link"),
])

export const textRecord1 = new Struct(textRecordType, [
  new Field(new StringValue("name_value"), "name_value"),
  new Field(new StringValue("https://discord.com/marko"), "link"),
])
export const textRecords = new ArrayVec(textRecordsType, [textRecord1])

export const walletStruct = new Struct(walletsType, [
  new Field(new StringValue("erd1jk8tetypqufjwkydyvk0gcta9wnqjxh05krnedhv4yf52pwgvycs5k6lsr"), "egld"),
  new Field(new StringValue("erd1jk8tetypqufjwkydyvk0gcta9wnqjxh05krnedhv4yf52pwgvycs5k6lsr"), "btc"),
  new Field(new StringValue("erd1jk8tetypqufjwkydyvk0gcta9wnqjxh05krnedhv4yf52pwgvycs5k6lsr"), "eth"),
])
