describe('Home component', () => {
    let $controller, HomeComponentController, HomeService;
    let userList = [
        { id: '1', name: 'Jane', role: 'Designer', location: 'New York', twitter: 'gijane' },
        { id: '2', name: 'Bob', role: 'Developer', location: 'New York', twitter: 'billybob' },
        { id: '3', name: 'Jim', role: 'Developer', location: 'Chicago', twitter: 'jimbo' },
        { id: '4', name: 'Bill', role: 'Designer', location: 'LA', twitter: 'dabill' }
    ];

    beforeEach(angular.mock.module('ui.router'));
    beforeEach(angular.mock.module('components.homeService'));
    beforeEach(angular.mock.module('components.homeComponent'));

    beforeEach(inject((_$controller_, _HomeService_) => {
        $controller = _$controller_;
        HomeService = _HomeService_;

        spyOn(HomeService, 'getAll').and.callFake(() => {
            return userList;
        });

        HomeComponentController = $controller('HomeComponentController', { HomeService: HomeService });
    }));

    it('should exist', () => {
        expect(HomeComponentController).toBeDefined();
    });
    it('should initialize with a call to Users.all()', function () {
        expect(HomeService.getAll).toHaveBeenCalled();
        expect(HomeComponentController.users).toEqual(userList);
    });
});