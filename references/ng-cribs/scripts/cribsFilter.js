angular
	.module('ngCribs')
	.filter('cribsFilter', function() {

		return function(listings, priceInfo) {

			var filtered = [];

			var min = priceInfo.min;
			var max = priceInfo.max;

			angular.forEach(listings, function(listing) {

				if(listing.price >= min && listing.price <= max) {

					filtered.push(listing);
				}
			});

			return filtered;
		}
	});