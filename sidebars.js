/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  introduction: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['intro', 'security'],
    },
  ],
  createtools: [
    {
      type: 'category',
      label: 'NFT Smart Contracts',
      collapsed: true,
      items: [
        'smart-contracts/creator-tools/intro',
        'smart-contracts/creator-tools/factories',
        'smart-contracts/creator-tools/rewards',
        {
          type: 'category',
          label: '1155 Contracts',
          collapsed: false,
          items: [
            'smart-contracts/creator-tools/Deploy1155Contract',
            'smart-contracts/creator-tools/Creating1155Token',
            'smart-contracts/creator-tools/Selling1155',
            'smart-contracts/creator-tools/Minting1155',
            'smart-contracts/creator-tools/Permissions1155',
            'smart-contracts/creator-tools/B2R1155',
          ],
        },
        {
          type: 'category',
          label: '721 Contracts',
          collapsed: true,
          items: [
            'smart-contracts/creator-tools/ZoraNFTCreator',
            'smart-contracts/creator-tools/ERC721Drop',
            'smart-contracts/creator-tools/EditionMetadataRenderer',
            'smart-contracts/creator-tools/JSONExtensionRegistry',
            'smart-contracts/creator-tools/DropMetadataRenderer',
          ],
        },
        
      ],
    },
  ],
  nounsbuilder: [
    {
      type: 'category',
      label: 'Nouns Builder',
      collapsed: true,
      items: [
        'smart-contracts/nouns-builder/intro',
        'smart-contracts/nouns-builder/img-config',
        'smart-contracts/nouns-builder/creating',
        'smart-contracts/nouns-builder/auctions',
        'smart-contracts/nouns-builder/governance',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: ['guides/builder-deployment', 'guides/builder-proposal'],
    },
  ],
  api: [
    {
      type: 'category',
      label: 'Zora API',
      items: [
        'zora-api/intro',
        'zora-api/query-formatting',
        'zora-api/media-encoding',
        'zora-api/zdk',
        {
          type: 'category',
          label: 'Guides',
          collapsed: false,
          items: [
            'guides/api-address-balance',
            'guides/api-collection-data',
            'guides/zdk-intro-guide',
          ],
        },
      ],
    },
  ],
  devtools: [
    {
      type: 'category',
      label: 'Dev Tools',
      collapsed: true,
      items: [
        'zora-api/zdk',
        {
          type: 'category',
          label: 'NFT Rendering',
          collapsed: true,
          items: ['developer-tools/nft-rendering/introduction'],
        },
        {
          type: 'category',
          label: 'NFT Hooks',
          collapsed: false,
          items: [
            'developer-tools/nft-hooks/intro',
            'developer-tools/nft-hooks/useNft',
            'developer-tools/nft-hooks/usenftmetadata',
            'developer-tools/nft-hooks/usenftcontent',
          ],
        },
      ],
    },
  ],
  zoranetwork: [
    'zora-network/intro',
    'zora-network/network',
    'zora-network/ethvszora',
    'zora-network/bridging',
    'zora-network/contracts',
    'zora-network/metamask',
    'zora-network/deployments',
    {
      type: 'link',
      label: 'Status',
      href: 'https://status.zora.energy/',
    },
    {
      type: 'category',
      label: 'Guides',
      items: [],
    },
  ],
}
