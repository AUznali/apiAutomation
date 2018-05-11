'use strict';


var filterArray = function(arrayToFilter, criteriaToFilter, language) {
return new Promise((resolve, reject) => {

  var filteredArray = arrayToFilter.filter(function(item) {
    return criteriaToFilter.indexOf(item.provider.id) !== -1;
  });

  var filteredArrayByLanguage = filteredArray.filter(content => content.type == language);
  // = = = = = = =
  resolve(filteredArrayByLanguage);
});
};








module.exports = filterArray;
