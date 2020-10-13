import { types } from '../actions/item';

const initialState = {
  items: [
    {
      itemId: 1,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1111',
      title: '5 Squashy Bananas',
      category: 'Fruit',
      description: 'Been in my bag, only one end is squishy.',
      expiryDate: '23/10/2020',
      location: 'EN4 4QE',
      preferredProvideStartTime: '23/10/2020 4PM',
      preferredProvideEndTime: '23/10/2020 6PM',
      preferredCollectStartTime: '23/10/2020 4PM',
      preferredCollectEndTime: '23/10/2020 6PM',
      reservedItem: 'false'
    },
    {
      itemId: 2,
      provideUserId: 2,
      collectUserId: 3,
      photoId: '#1112',
      title: 'Cashew nuts',
      category: 'Nuts',
      description: 'Unopened but the packet is a bit battered',
      expiryDate: '24/10/2020',
      location: 'SR5 4TQ',
      preferredProvideStartTime: '24/10/2020 10:30AM',
      preferredProvideEndTime: '24/10/2020 5:50PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 3,
      provideUserId: 2,
      collectUserId: 3,
      photoId: '#1113',
      title: '6 Chicken Wings',
      category: 'Meat',
      description: "Cooked yesterday, I don't want them.",
      expiryDate: '30/11/2020',
      location: 'EN4 4QE',
      preferredProvideStartTime: '24/11/2020 1PM',
      preferredProvideEndTime: '24/11/2020 3PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 4,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1114',
      title: 'Potatoes',
      category: 'Vegtables',
      description: 'Half a bag of Potatoes roots growing',
      expiryDate: '28/06/2020',
      location: 'DE3 7TE',
      preferredProvideStartTime: '28/11/2020 1PM',
      preferredProvideEndTime: '28/11/2020 3PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 5,
      provideUserId: 3,
      collectUserId: null,
      photoId: '#1115',
      title: '10 Leeks',
      category: 'Vegetables',
      description: '10 Leeks picked from my garden 5 days ago',
      expiryDate: '29/12/2020',
      location: 'SL3 7TE',
      preferredProvideStartTime: '26/12/2020 1PM',
      preferredProvideEndTime: '26/12/2020 3PM',
      preferredCollectStartTime: '25/12/2020 8AM',
      preferredCollectEndTime: '25/12/2020 10PM',
      reservedItem: 'false'
    },
    {
      itemId: 6,
      provideUserId: 2,
      collectUserId: null,
      photoId: '#1116',
      title: 'Soup',
      category: 'Canned Food',
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      expiryDate: '03/12/2020',
      location: 'SP3 7XE',
      preferredProvideStartTime: '02/12/2020 4PM',
      preferredProvideEndTime: '02/12/2020 8PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 7,
      provideUserId: 2,
      collectUserId: 1,
      photoId: '#1117',
      title: 'Soup',
      category: 'Canned Food',
      description: '2 Tins Of Baxters Carrot And Corriander Soup',
      expiryDate: '03/12/2020',
      location: 'SP3 7XE',
      preferredProvideStartTime: '02/12/2020 4PM',
      preferredProvideEndTime: '02/12/2020 8PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    },
    {
      itemId: 8,
      provideUserId: 3,
      collectUserId: 1,
      photoId: '#1115',
      title: '10 Leeks',
      category: 'Vegetables',
      description: '10 Leeks picked from my garden 5 days ago',
      expiryDate: '29/12/2020',
      location: 'SL3 7TE',
      preferredProvideStartTime: '26/12/2020 1PM',
      preferredProvideEndTime: '26/12/2020 3PM',
      preferredCollectStartTime: '25/12/2020 8AM',
      preferredCollectEndTime: '25/12/2020 10PM',
      reservedItem: 'false'
    },
    {
      itemId: 9,
      provideUserId: 1,
      collectUserId: 2,
      photoId: '#1114',
      title: 'Potatoes',
      category: 'Baked Goods',
      description: 'Half a bag of Potatoes roots growing',
      expiryDate: '28/05/2020',
      location: 'DE3 7TE',
      preferredProvideStartTime: '28/11/2020 1PM',
      preferredProvideEndTime: '28/11/2020 3PM',
      preferredCollectStartTime: null,
      preferredCollectEndTime: null,
      reservedItem: 'false'
    }
  ],
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ITEMS:
      return {
        items: payload
      };
    case types.GET_ITEMS_ERROR:
      return {
        items: payload
      };
    default:
      return state;
  }
};
