import React, { Component } from 'react'
import SinglePlanPage from '../componets/home/PlanDetail'
import PlanDetailSection from '../componets/Plans/PlanDetailSection'
import PlanInclusions from '../componets/Plans/PlanInclusions'
import AddOnsPricing from '../componets/Plans/AddOnsPricing'
import FAQSection from '../componets/home/FAQsSection'


export default class Plan1 extends Component {
  render() {
    return (
      <div>
       <PlanDetailSection/>
       <PlanInclusions/>
       <AddOnsPricing/>
       <FAQSection/>
      </div>
    )
  }
}
