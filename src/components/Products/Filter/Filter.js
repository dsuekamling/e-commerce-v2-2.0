import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';

function Filter (props) {
  return(
  <div className="Filter">
    <h2 className="Filter__header">Filters</h2>
    <div className="Filter__filters">
      { props.options &&
        props.options.map((option) => (
          <button
            key={option.productTag}
            name={option.productTag} 
            type="button" 
            className="Filter__button" 
            onClick={(e) => {
              e.target.classList.toggle('Active');
              return props.search(option.productTag)
            }}
          >{option.label}</button>
        ))
      }
    </div>
  </div>
)};

function mapStateToProps (state) {
  return {
    options : state.filter.options
  };
}

function mapDispatchToProps (dispatch) {
  return {
    search: (productTag) => dispatch({type: actionTypes.SEARCH, productTag})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
// import React from 'react';
// import { connect } from 'react-redux';

// import * as actionTypes from '../../../store/actions';

// function Filter (props) {
//   return(
//     <div className="Filter">
//       <h2 className="Filter__header">Filters</h2>
//       <div className="Filter__filters">
//         {props.options &&
//           props.options.map((option) => (
//             <button
//               key={option.productTag}
//               name={option.productTag} 
//               type="button" 
//               className={`Filter__button ${props.selectedTag === option.productTag ? 'Active' : ''}`} 
//               onClick={() => {
//                 props.selectTag(option.productTag);
//               }}
//             >
//               {option.label}
//             </button>
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// function mapStateToProps (state) {
//   return {
//     options: state.filter.options,
//     selectedTag: state.filter.selectedTag,
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     selectTag: (productTag) => dispatch({type: actionTypes.SELECT_TAG, productTag})
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
