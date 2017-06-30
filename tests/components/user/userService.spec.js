describe('User service', () => {
    let UserService, $q, $httpBackend;
    const API = 'http://pokeapi.co/api/v2/pokemon/';
    const RESPONSE_SUCCESS = {
        'id': 25,
        'name': 'pikachu',
        'sprites': {
            'front_default': 'http://pokeapi.co/media/sprites/pokemon/25.png'
        },
        'types': [{
            'type': { 'name': 'electric' }
        }]
    };
    const RESPONSE_ERROR = {"detail": "Not found."};

    beforeEach(angular.mock.module('components.userService'));

    beforeEach(inject((_UserService_, _$q_, _$httpBackend_) => {
        UserService = _UserService_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
    }));

    // Verify our controller exists
    it('should exist', () => {
        expect(UserService).toBeDefined();
    });

    describe('findByName()', () => {
        let result;
        beforeEach(function () {
            result = {};
            spyOn(UserService, "findByName").and.callThrough();
        });
        it('should be defined', () => {
            expect(UserService.findByName).toBeDefined();
        });
        it('should return a Pokemon when called with a valid name', () => {
            let search = 'pikachu';            
            $httpBackend.whenGET(API + search).respond(200, $q.when(RESPONSE_SUCCESS));

            expect(UserService.findByName).not.toHaveBeenCalled();
            expect(result).toEqual({});

            UserService.findByName(search)
                .then((res) => {
                    result = res;
                });
            
            $httpBackend.flush();

            expect(UserService.findByName).toHaveBeenCalledWith(search);
            expect(result.id).toEqual(25);
            expect(result.name).toEqual('pikachu');
            expect(result.sprites.front_default).toContain('.png');
            expect(result.types[0].type.name).toEqual('electric');
        });
    });
});