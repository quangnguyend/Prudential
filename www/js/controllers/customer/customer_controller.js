function customerCtrl ($scope, $rootScope) {
  $rootScope.showBar = true
  $rootScope.showBack = true
  $rootScope.showMenu = true

  $scope.customer = {
    lastname: '',
    firstname: '',
    smoke: false
  }

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
