# Node DB 2 Module Challenge

In this challenge, you will write an API that can be used to manage _Cars_ stored in a Relational Database.

## Project Set Up

Follow these steps for starting your project.

- [X] Fork this repository into your account and **clone your version**.
- [X] Add your _Team Lead_ as collaborator on your repository.
- [X] Create a new branch: git checkout -b `<firstName-lastName>`.
- [X] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [X] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project.

- [X] Submit a Pull-Request to merge `<firstName-lastName>` Branch into master (student's Repository). **Please don't merge your own pull request**
- [X] Add your _Team Lead_ as a reviewer on the pull-request
- [X] Your _Team Lead_ will count the project as complete by merging the branch back into master.

## Minimum Viable Product e client for this API is a car dealer who has provided the following specs:

- The critical information for each car is the VIN, make, model, and mileage.
- They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

## Stretch Problems

- Add seed data to the database using `knex seeds`
- Add `UPDATE` and `DELETE` operations to your API.
- Write a schema file for a `sales` table. This table should track information on the sale of each car. You may wish to research `foreign keys` in order to link each sale to the entry in `cars` which sold.
