describe('User service', () => {
    let UserService, $q, $httpBackend;
     
    const USER_API = 'localhost:3000/name/'
    const USER_SUCCESS = userList = [
		{
			id: '1',
			name: 'Jane',
			role: 'Designer',
			location: 'New York',
			twitter: 'gijane'
		},
		{
			id: '2',
			name: 'Bob',
			role: 'Developer',
			location: 'New York',
			twitter: 'billybob'
		},
		{
			id: '3',
			name: 'Jim',
			role: 'Developer',
			location: 'Chicago',
			twitter: 'jimbo'
		},
		{
			id: '4',
			name: 'Bill',
			role: 'Designer',
			location: 'LA',
			twitter: 'dabill'
		}
	];

    beforeEach(angular.mock.module('components.userService'));
    beforeEach(inject((_UserService_, _$q_, _$httpBackend_) => {
        UserService = _UserService_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    it('should exist', () => {
        expect(UserService).toBeDefined();
    });

    describe('getUsers()', () => {
        let result;
        beforeEach(function () {
            result = {};
            spyOn(UserService, 'getUsers').and.callThrough();
        });
        it('should be defined', () => {
            expect(UserService.getUsers).toBeDefined();
        });
        it('should return users', () => {
            
            $httpBackend.whenGET(USER_API).respond(200, $q.when(USER_SUCCESS));

            expect(UserService.getUsers).not.toHaveBeenCalled();
            expect(result).toEqual({});

            UserService.getUsers()
                .then((res) => {
                    result = res;
                });

            $httpBackend.flush();
            
            expect(result).toBeDefined();
            expect(result).toEqual(USER_SUCCESS);
        });
    });
});