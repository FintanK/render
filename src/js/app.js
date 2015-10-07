'use strict';

angular.module('Scaffold', [])
.config([
        '$httpProvider', 'CONFIG', 'TRANSLATE', '$stateProvider', '$urlRouterProvider', '$tooltipProvider',
        '$urlMatcherFactoryProvider',
        function (
            $httpProvider, CONFIG, TRANSLATE, $stateProvider, $urlRouterProvider, $tooltipProvider,
            $urlMatcherFactoryProvider) {

            $urlMatcherFactoryProvider.strictMode(false);

            /**
             * Application states
             */
            $stateProvider.state('main.bulk-domain', {
                url: '/bulk-domain',
                data: {
                    title: TRANSLATE.SITE_BULK_DOMAIN_SEARCH,
                    displayTitle: TRANSLATE.SITE_BULK_DOMAIN_SEARCH
                },
                views: {
                    'subNav@': {
                        template: '<title-bar></title-bar>'
                    },
                    '': {
                        controller: 'BulkSearchController as domainSearch',
                        templateUrl: 'views/domains/domainsearch/bulkLayout.html'
                    }
                }
            });
        }
]);