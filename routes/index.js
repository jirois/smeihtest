const router = require('express').Router();

const auth = require('../middleware/auth');
const ctrlInvestee = require('../middleware/investee');
const ctrlAuditTrail = require('../middleware/auditTrail');
const ctrlBusiness = require('../middleware/business');
const ctrlMilestone = require('../middleware/milestones');
const ctrlMilestoneReport = require('../middleware/milestonesReport');
const ctrlMilestoneValidation = require('../middleware/milestoneValidation');
const ctrlTransaction = require('../middleware/transaction');
const ctrlSetting = require('../middleware/setting');


// Investee router
router
    .route('invest')
    .get(ctrlInvestee.investList)
    .post(ctrlInvestee.investeeCreate);

router
    .route('/invest/:investid')
    .get(ctrlInvestee.investReadOne)
    .put(ctrlInvestee.investeeUpdate)
    .delete(ctrlInvestee.investDelete);


// AuditTrail router
router
    .route('audit')
    .get(ctrlAuditTrail.auditTrailList)
    .post(ctrlAuditTrail.auditTrailCreate);

router
    .route('audit/:auditid')
    .get(ctrlAuditTrail.auditTrayReadOne)
    .put(ctrlAuditTrail.auditTrailUpdate)
    .delete(ctrlAuditTrail.auditTrailDelete);

// Business router
router
    .route('business')
    .get(ctrlBusiness.businessList)
    .post(ctrlBusiness.businessCreate);

router
    .route('business/:businessid')
    .get(ctrlBusiness.businessReadOne)
    .put(ctrlBusiness.businessUpdate)
    .delete(ctrlBusiness.businessDelete);

// Transaction router
router
    .route('transaction')
    .get(ctrlTransaction.transactionList)
    .post(ctrlTransaction.transactionCreate);

router
    .route('transaction/:transactionid')
    .get(ctrlTransaction.transactionReadOne)
    .put(ctrlTransaction.transactionUpdate)
    .delete(ctrlTransaction.transactionDelete);

// Milestone router
router
    .route('milestone')
    .get(ctrlMilestone.milestoneList)
    .post(ctrlMilestone.milestoneCreate);

router
    .route('milestone/:milestoneid')
    .get(ctrlMilestone.milestoneReadOne)
    .put(ctrlMilestone.milestoneUpdate)
    .delete(ctrlMilestone.milestoneDelete);

// Milestonereport router
router
    .route('milestonereport')
    .get(ctrlMilestoneReport.milestoneReportList)
    .post(ctrlMilestoneReport.milestoneReportCreate);

router
    .route('milestonereport/:milestonereportid')
    .get(ctrlMilestoneReport.milestoneReportReadOne)
    .put(ctrlMilestoneReport.milestoneReportUpdate)
    .delete(ctrlMilestoneReport.milestoneReportDelete);

// Milestonevalidation router
router
    .route('milestonevalidation')
    .get(ctrlMilestoneValidation.milestoneValidationList)
    .post(ctrlMilestoneValidation.milestoneValidationCreate);

router
    .route('milestonevalidation/:milestonevalidationid')
    .get(ctrlMilestoneValidation.milestoneReadOne)
    .put(ctrlMilestoneValidation.milestoneValidationUpdate)
    .delete(ctrlMilestoneValidation.milestoneValidationDelete);

// Setting router
router
    .route('setting')
    .post(ctrlSetting.settingCreate);

router
    .route('setting/:settingid')
    .put(ctrlSetting.settingUpdate)
    .delete(ctrlSetting.settingDelete);

router.post('/signup', auth.register);
router.post('/signin', auth.signIn);

module.exports = router;
