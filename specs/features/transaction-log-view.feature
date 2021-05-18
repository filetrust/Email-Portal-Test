Feature: Transaction log View

  Background: Transaction Log Page
    Given I am logged into the portal as a tenant

	######################################
	# Transaction Date filter Scenarios
	######################################

  @TC_Transaction_All_Record_Sender_receiver_Check
  Scenario: Transaction Log data driven date can be set
    Given I am on transaction log screen
    When I set transaction date to a given value
      | fromData               | toDate                 | sender                                 | receiver                                |
      | 30/09/2020 00:00:00 AM | 07/10/2020 11:59:59 PM | tom@entsoltest1.glasswallsolutions.com | bill@entsoltest1.glasswallsolutions.com |
    Then I should see tom@entsoltest1.glasswallsolutions.com as sender in each record in table
    Then I should see bill@entsoltest1.glasswallsolutions.com as receiver in each record in table


  @TC_Transaction_Data_With_Examples
  Scenario Outline: Transaction Log data driven date can be set
    Given I am on transaction log screen
    When I set transaction data to following - from date to <fromDate> to date to <toDate> sender to <sender> and recepient to <receiver>
    Then I see <numRows> rows in the table

    Examples:
      | fromDate               | toDate                 | sender                                  | receiver                                | numRows |
      | 30/09/2020 00:00:00 AM | 07/10/2020 11:59:59 PM | tom@entsoltest1.glasswallsolutions.com  | bill@entsoltest1.glasswallsolutions.com | 2       |
      | 29/09/2020 00:00:00 AM | 07/10/2020 11:59:59 PM | tom@entsoltest1.glasswallsolutions.com  | bill@entsoltest1.glasswallsolutions.com | 2       |
      | 28/09/2020 00:00:00 AM | 07/10/2020 11:59:59 PM | bill@entsoltest1.glasswallsolutions.com | tom@entsoltest1.glasswallsolutions.com  | 0       |

  @TC_Transaction_Valid_Date
  Scenario: Transaction Log valid date can be set
    Given I am on transaction log screen
    When I set transaction date to a valid value
    Then The transaction date is set

  @TC_Transaction_Invalid_Date
  Scenario: Transaction Log does not allow invalid date to be set
    Given I am on transaction log screen
    When I set transaction date to invalid date
    Then The transaction date is not set

  @TC_Transaction_Unset_Date
  Scenario: Transaction Log allows to unset date
    Given I am on transaction log screen
    When I unset transaction date
    Then The transaction date is not set

	##############################
	# Sender filter Scenarios
	##############################

  @TC_Transaction_Valid_Sender
  Scenario: Transaction Log valid sender can be set
    Given I am on transaction log screen
    When I set sender to a valid value
    Then The sender id is set

  @TC_Transaction_Invalid_Sender
  Scenario: Transaction Log does not allow invalid user to be set as sender
    Given I am on transaction log screen
    When I set sender id to an invalid value
    Then The sender id is not set

  @TC_Transaction_Null_Date
  Scenario: Transaction Log allows to unset sender
    Given I am on transaction log screen
    When I unset sender id
    Then The sender id is not set


	##############################
	# Recipient filter Scenarios
	##############################

  @TC_Transaction_Valid_Recipient
  Scenario: Transaction Log valid recipient can be set
    Given I am on transaction log screen
    When I set recipient to a valid value
    Then The recipient id is set

  @TC_Transaction_Invalid_Recipient
  Scenario: Transaction Log does not allow invalid user to be set as recipient
    Given I am on transaction log screen
    When I set recipient id to an invalid value
    Then The recipient id is not set

  @TC_Transaction_Unset_Recipient
  Scenario: Transaction Log allows to unset recipient
    Given I am on transaction log screen
    When I unset recipient id
    Then The sender id is not set


	###################################
	# Transaction Id filter Scenarios
	###################################

  @TC_Transaction_Valid_Transaction_Id
  Scenario: Transaction Log valid transaction id can be set
    Given I am on transaction log screen
    When I set transaction-id to a valid value
    Then The transaction-id is set

  @TC_Transaction_Invalid_Transaction_Id
  Scenario: Transaction Log does not allow invalid transaction id to be set
    Given I am on transaction log screen
    When I set transaction-id to an invalid value
    Then The transaction-id is not set

  @TC_Transaction_Unset_Tansaction_Id
  Scenario: Transaction Log allows to unset sender
    Given I am on transaction log screen
    When I unset transaction-id
    Then The transaction-id is not set


	###################################
	# Email SUbject filter Scenarios
	###################################

  @TC_Transaction_Valid_Email_Subject
  Scenario: Transaction Log valid email subject can be set
    Given I am on transaction log screen
    When I set subject to a valid value
    Then The subject is set

  @TC_Transaction_Invalid_Subject
  Scenario: Transaction Log does not allow invalid subject to be set
    Given I am on transaction log screen
    When I set subject to an extra ordinarily large value
    Then The subject is not set

  @TC_Transaction_Unset_Subject
  Scenario: Transaction Log allows to unset subject
    Given I am on transaction log screen
    When I unset subject
    Then The subject is not set


	###################################
	# File Name filter Scenarios
	###################################

  @TC_Transaction_Valid_File_Name
  Scenario: Transaction Log valid file name can be set
    Given I am on transaction log screen
    When I set file name to a valid value
    Then The file name is set

  @TC_Transaction_Invalid_File_Name
  Scenario: Transaction Log does not allow invalid file name to be set
    Given I am on transaction log screen
    When I set file name to an invalid value
    Then The file name is not set

  @TC_Transaction_Unset_File_Name
  Scenario: Transaction Log allows to unset file name
    Given I am on transaction log screen
    When I unset file name
    Then The file name is not set


	########################################
	# File Name Outcomes filter Scenarios
	########################################

  @TC_Transaction_Set_File_Outcomes
  Scenario: Transaction Log valid file outcomes be set
    Given I am on transaction log screen
    When I selected 2 file outcomes
    Then File outcomes are set

  @TC_Transaction_Unset_File_Outcomes
  Scenario: Transaction Log does not allow invalid file name to be set
    Given I am on transaction log screen
    When I unselected all file outcomes
    Then File outcomes are unset


	############################################
	# Logging functionality filter Scenarios
	############################################

  @TC_Transaction_Logs_Fetched_With_Date
  Scenario: Transaction Logs for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I clicked go
    Then I am on page 1

  @TC_Transaction_Logs_Fetched_With_Date_And_Sender
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I clicked go
    Then I am on page 1

  @TC_Transaction_Logs_Fetched_With_Date_Sender_And_Recipient
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I set recipient to a valid value
    When I clicked go
    Then I am on page 1

  @TC_Transaction_Logs_Fetched_With_Date_Sender_Recipient_And_TID
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I set recipient to a valid value
    When I set transaction-id to a valid value
    When I clicked go
    Then I am on page 1

  @TC_Transaction_Logs_Fetched_With_Date_Sender_Recipient_TID_And_Subject
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I set recipient to a valid value
    When I set transaction-id to a valid value
    When I set subject to a valid value
    When I clicked go
    Then I am on page 1


  @TC_Transaction_Logs_Fetched_With_Date_Sender_Recipient_TID_Subject_And_FileName
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I set recipient to a valid value
    When I set transaction-id to a valid value
    When I set subject to a valid value
    When I set file name to a valid value
    When I selected 2 file outcomes
    When I clicked go
    Then I am on page 1

  	############################################
	# Pagination Scenarios
	############################################

  @TC_Transaction_Logs_Navigation
  Scenario: Transaction Logs for a sender for today are diplayed
    Given I am on transaction log screen
    When I set transaction date to a valid value
    When I set sender to a valid value
    When I set recipient to a valid value
    When I set transaction-id to a valid value
    When I set subject to a valid value
    When I set file name to a valid value
    When I selected 2 file outcomes
    When I clicked go
    Then I am on the first page
    When I clicked last
    Then I am on the last page
		# Tests for previous and next we can write when we have data on the dom element that holds the page number
		# Leaving these alone for now till we have that
		# Also, we will need valid test data populated so that we know how many pages and logs will be generated on Go.
    When I clicked previous
    When I clicked next
