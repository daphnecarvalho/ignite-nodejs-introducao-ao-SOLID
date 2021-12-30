  ## Project commands

  ```bash
    # Install dependencies
    yarn install

    # Run project
    yarn dev

    # Run tests
    yarn test
  ```

  ## Tests

  * TurnUserAdminUseCase
    + ✓ should be able to turn an user as admin
    + ✓ should not be able to turn a non existing user as admin

  * UsersRepository
    + ✓ should be able to create new users
    + ✓ should be able to list all users
    + ✓ should be able to find user by ID
    + ✓ should be able to find user by e-mail address
    + ✓ should be able to turn an user as admin

  * ShowUserProfileUseCase
    + ✓ should be able to get user profile by ID
    + ✓ should not be able to show profile of a non existing user

  * User model
    + ✓ should be able to create an user with all props

  * CreateUserUseCase
    + ✓ should be able to create new users
    + ✓ should not be able to create new users when email is already taken

  * ListAllUsersUseCase
    + ✓ should be able to list all users
    + ✓ should not be able to a non admin user get list of all users
    + ✓ should not be able to a non existing user get list of all users

  * routes
    + [POST] /users
      + ✓ should be able to create new users
      + ✓ should not be able to create new users when email is already taken
    + [PATCH] /users/:user_id/admin
      + ✓ should be able to turn an user as admin
      + ✓ should not be able to turn a non existing user as admin
    + [GET] /users/:user_id
      + ✓ should be able to get user profile by ID
      + ✓ should not be able to show profile of a non existing user
    + [GET] /users
      + ✓ should be able to list all users
      + ✓ should not be able to a non admin user get list of all users
      + ✓ should not be able to a non admin user get list of all users
      + ✓ should not be able to a non existing user get list of all users

  <p>
    Test Suites: 7 total
  </p>
  <p>
    Tests: 25 total
  </p>