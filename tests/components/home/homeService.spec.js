describe('Home service', () => {
	let HomeService;
	let userList = [
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
	beforeEach(angular.mock.module('components.homeService'));
	beforeEach(inject((_HomeService_) => {
		HomeService = _HomeService_;
	}));
	it('should exist', () => {
		expect(HomeService).toBeDefined();
	});

	describe('.all()', () => {
		it('should exist', () => {
			expect(HomeService.getAll).toBeDefined();
		});

		it('should return a hard-coded list of users', () => {
			expect(HomeService.getAll()).toEqual(userList);
		});
	});

	describe('.getById(id)', () => {
		let singleUser = {
			id: '2',
			name: 'Bob',
			role: 'Developer',
			location: 'New York',
			twitter: 'billybob'
		}
		it('should exist', () => {
			expect(HomeService.getById).toBeDefined();
		});
		it('should return a single user', () => {
			expect(HomeService.getById(('2'))).toEqual(singleUser)
		});
		it('should return undefined if the user cannot be found', function () {
			expect(HomeService.getById('ABC')).not.toBeDefined();
		});
	});
});