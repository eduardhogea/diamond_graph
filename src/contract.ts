import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ConsecutiveTransfer as ConsecutiveTransferEvent,
  DiamondMinted as DiamondMintedEvent,
  FacetRegistered as FacetRegisteredEvent,
  FacetUnregistered as FacetUnregisteredEvent,
  Transfer as TransferEvent
} from "../generated/Contract/Contract"
import {
  Approval,
  ApprovalForAll,
  ConsecutiveTransfer,
  DiamondMinted,
  FacetRegistered,
  FacetUnregistered,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleConsecutiveTransfer(
  event: ConsecutiveTransferEvent
): void {
  let entity = new ConsecutiveTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.fromTokenId = event.params.fromTokenId
  entity.toTokenId = event.params.toTokenId
  entity.from = event.params.from
  entity.to = event.params.to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDiamondMinted(event: DiamondMintedEvent): void {
  let entity = new DiamondMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.diamond = event.params.diamond

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacetRegistered(event: FacetRegisteredEvent): void {
  let entity = new FacetRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facet = event.params.facet
  entity.selectors = event.params.selectors

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFacetUnregistered(event: FacetUnregisteredEvent): void {
  let entity = new FacetUnregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.facet = event.params.facet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
