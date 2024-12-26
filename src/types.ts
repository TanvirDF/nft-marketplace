export type NFT = {
    nftTitle: string;
    nftImage: string;
    price: string;
};

export type Artist = {
    name: string;
    artistImage: string;
}

export type Collection = {
    collectionTitle: string;
    artist: Artist;
    collectionImage: string;
    description: string;
    nfts: NFT[];
};