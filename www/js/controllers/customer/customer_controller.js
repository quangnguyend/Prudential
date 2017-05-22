function customerCtrl ($scope, $rootScope, DataService, $location, $ionicScrollDelegate) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  var customer = DataService.getData('customer') || { lastname: '', firstname: '', smoke: false, phone: ''}
  $scope.customer = customer

  var schema = {
    customer_name: {
      lastname: 'string',
      firstname: 'string'
    },
    customer_dob: {
      birthday: 'object'
    },
    customer_job: {
      nature_occupation: 'string'
    },
    customer_goal: {
      goals: 'string'
    },
    customer_existing: {
      existing: 'string'
    },
    customer_smoker: {
      phone: 'string'
    }
  }

  $scope.clickButtonHandle = function (nextRoute) {
    $location.url(nextRoute)
    DataService.setData('customer', $scope.customer)
  }

  function validationForm (form) {
    var item = schema[form]
    if (!item) { return }
    var rs = Object.keys(item).map(function (field) {
      if (typeof $scope.customer[field] === item[field] && $scope.customer[field] !== '') { return true }
      return false
    })
    if (rs.indexOf(false) >= 0) {
      return false
    }
    return true
  }

  $scope.clickNextHandle = function (idElement, nextId) {
    if (!nextId) { return }
    var nextIdElement = '#' + nextId
    var distance = $(nextIdElement)[0] && $(nextIdElement)[0].offsetTop || 0

    $scope.pageList.forEach(function (page, index, pageList) {
      if (page.id === idElement) {
        if (validationForm(idElement)) {
          if (pageList[index + 1]) {
            pageList[index + 1].enable = true
          }
        }
      }
    })
    $ionicScrollDelegate.scrollTo(0, distance, true)
  }

  $scope.pageList = [
    {id: 'customer_name', path: 'templates/customer/customer_name.html', next: 'customer_dob', enable: true, step: 1},
    {id: 'customer_dob', path: 'templates/customer/customer_dob.html', next: 'customer_job', enable: false, step: 2},
    {id: 'customer_job', path: 'templates/customer/customer_job.html', next: 'customer_goal', enable: false, step: 3},
    {id: 'customer_goal', path: 'templates/customer/customer_goal.html', next: 'customer_existing', enable: false, step: 4},
    {id: 'customer_existing', path: 'templates/customer/customer_existing.html', next: 'customer_smoker', enable: false, step: 5},
    {id: 'customer_smoker', path: 'templates/customer/customer_smoker.html', next: 'customer_thanks', enable: false, step: 6},
    {id: 'customer_thanks', path: 'templates/customer/customer_thanks.html', next: '', enable: false, step: 7}
  ]

  $scope.data = {
    nature_occupation: [
      {
        title: 'White collar/office worker',
        describe: 'My job is mostly sedentary and desk bound examples include office clerical workers, doctors, general management, financial accountants, management, CEO'
      },
      {
        title: 'Sales or light manual work',
        describe: 'Your job involves light manual duties or local travel (but not delivering goods). Examples include waiter/waitresses, sales, retail shop workers, nurses, cleaners, factory supervisors with light duties and engineers (or other professionals) with occasional fieldwork.'
      },
      {
        title: 'Manual duties',
        describe: 'Your job involves light manual duties or local travel (but not delivering goods). Examples include waiter/waitresses, sales, retail shop workers, nurses, cleaners, factory supervisors with light duties and engineers (or other professionals) with occasional fieldwork.'
      },
      {
        title: 'Risky Occupation',
        describe: 'Your job involves any of the following: working 15 metres above or below the ground, shipping, off-shore fishing, mining, oil-rigs, the armed services, coast guard, working with chemicals, working underwater, working offshore, working underground, working with explosives, working as a professional athlete or non-commercial pilot.'
      }
    ],
    goals: [
      {
        title: 'No commitments',
        describe: "I'm still young with no commitments, show me where to invest."
      },
      {
        title: 'Family business',
        describe: 'I am learning the ropes to take over my family business.'
      },
      {
        title: 'Starting a family',
        describe: 'I am planning to start a family and never been more excited.'
      },
      {
        title: 'Married with children',
        describe: 'Iʼm married with children'
      },
      {
        title: 'Planning to retire',
        describe: 'I am planning for retirement.'
      }
    ],
    existing: [
      {title: 'Currently, I am not insured'},
      {title: 'Life policy'},
      {title: 'Health policy'},
      {title: 'Accident plan'},
      {title: 'Retirement'},
      {title: 'Education'}
    ]
  }
}
