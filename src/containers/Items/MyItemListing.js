import { connect } from 'react-redux';
import MyItemListing from 'components/Items/MyItemListing';
import {
  deleteItem,
  unreserveItem
  // sortByItem,
  // deleteExpiredItems
} from 'actions/item';

// import {
//  getAddress
// } from 'actions/user';

// 2nd parameter to this function holds our component props
const mapStateToProps = state => ({
  myitems: state.item.myitems,
  _id: state.auth.user.uid,
  // address: state.user.address,
  // addrstatus: state.user.addrstatus
});

const mapDispatchToProps = dispatch => ({

  unreserveItem: _id => dispatch(unreserveItem(_id)),
  deleteItem: _id => dispatch(deleteItem(_id)),
  // getAddress: postcode => dispatch(getAddress(postcode))
  // deleteExpiredItems: _id => dispatch(deleteExpiredItems(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyItemListing);
