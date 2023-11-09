CREATE TABLE[stage].[eligibilityStageData](

    [eligibilityStageDataId][bigint] IDENTITY(1, 1) NOT NULL,

    [accountId][int] NULL,

    [ecmPatientId][bigint] NULL,

    [pccPatientId][nvarchar](125) NULL,

    [externalPatientId][nvarchar](125) NULL,

    [patientResponsibilityId][bigint] NULL,

    [firstName][nvarchar](125) NULL,

    [middleName][nvarchar](75) NULL,

    [lastName][nvarchar](125) NULL,

    [dob][date] NULL,

    [gender][nvarchar](25) NULL,

    [payorType][nvarchar](25) NULL,

    [payorId][nvarchar](25) NULL,

    [payorName][nvarchar](max) NULL,

    [planName][nvarchar](max) NULL,

    [planType][nvarchar](max) NULL,

    [startDate][date] NULL,

    [endDate][date] NULL,

    [policyNumber][nvarchar](25) NULL,

    [groupNumber][nvarchar](25) NULL,

    [subscriberPatientRelationship][nvarchar](25) NULL,

    [subscriberPrefix][nvarchar](25) NULL,

    [subscriberFirstName][nvarchar](125) NULL,

    [subscriberMiddleName][nvarchar](75) NULL,

    [subscriberLastName][nvarchar](125) NULL,

    [subscriberSuffix][nvarchar](25) NULL,

    [subscriberDob][datetime] NULL,

    [subscriberGender][nvarchar](25) NULL,

    [subscriberSsn][nvarchar](50) NULL,

    [subscriberInsuredIdNumber][nvarchar](50) NULL,

    [subscriberAddressLine1][nvarchar](250) NULL,

    [subscriberAddressLine2][nvarchar](250) NULL,

    [subscriberCity][nvarchar](25) NULL,

    [subscriberState][nvarchar](25) NULL,

    [subscriberZipCode][nvarchar](25) NULL,

    [subscriberCounty][nvarchar](25) NULL,

    [subscriberCountry][nvarchar](25) NULL,

    [subscriberPhoneNumber][nvarchar](25) NULL,

    [ActiveInfo][nvarchar](25) NULL,

    [BenefitCoverageLevelCode][nvarchar](25) NULL,

    [InsuranceTypeCode][nvarchar](25) NULL,

    [PlanCoverageDescp][nvarchar](25) NULL,

    [TimePeriodQualifier][nvarchar](25) NULL,

    [BenefitAmount][decimal](12, 2) NULL,

    [BenefitPercent][nvarchar](25) NULL,

    [QuantityQualifier][nvarchar](25) NULL,

    [BenefitQuantity][nvarchar](25) NULL,

    eligibilityVerified bit default 0,



    [createdBy][int] NULL,

    [createdDate][datetime] NULL,

    [modifiedBy][int] NULL,

    [modifiedDate][datetime] NULL)