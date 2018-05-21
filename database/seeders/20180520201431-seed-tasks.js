'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('tasks', [{
      from_location: "25.204849,55.270783",
      to_location: "25.125386, 55.227821",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 01:36:08",
      finished_at: "2019-05-10 01:56:09",
      driver_name: "Marko Pandres",
      courier: "FastWay",
      description: "Deliver a credit card, user must sign",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.191099, 55.283402",
      to_location: "25.127795, 55.226619",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 04:26:08",
      finished_at: "2019-05-10 04:56:00",
      driver_name: "Anmol Dares",
      courier: "Wimo",
      description: "Deliver a bank statement",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.194594, 55.274034",
      to_location: "25.138623, 55.231355",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 09:21:18",
      finished_at: "2019-05-10 09:43:00",
      driver_name: "Marko Pandres",
      courier: "FastWay",
      description: "Deliver souq.com order",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.166517, 55.278027",
      to_location: "25.089483, 55.189321",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 09:16:38",
      finished_at: "2019-05-10 04:33:10",
      driver_name: "Adam Aldo",
      courier: "Wimo",
      description: "Grocery Delivery",
      status: "failed",
      driver_comment: "Can't reach the customer, customer not answering calls"
    },
    {
      from_location: "25.166517, 55.278027",
      to_location: "25.074626, 55.193905",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 11:23:03",
      finished_at: "2019-05-10 04:44:40",
      driver_name: "Marko Pandres",
      courier: "FastWay",
      description: "Deliver a credit card, user must sign",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.166051, 55.271847",
      to_location: "25.074626, 55.193905",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 11:26:08",
      finished_at: "2019-05-10 11:56:00",
      driver_name: "Adam Aldo",
      courier: "Wimo",
      description: "Deliver noon.com shipping",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.194594, 55.274034",
      to_location: "25.089483, 55.189321",
      delivery_date: "2019-05-10",
      started_at: "2019-05-10 15:56:28",
      finished_at: "2019-05-10 16:32:40",
      driver_name: "Anmol Dares",
      courier: "Wimo",
      description: "Deliver a document shipping",
      status: "completed",
      driver_comment: ""
    },
    {
      from_location: "25.089240, 55.211242",
      to_location: "25.138623, 55.231355",
      delivery_date: "2019-05-22",
      started_at: "",
      finished_at: "",
      driver_name: "Nazih Omar",
      courier: "FastWay",
      description: "Deliver emirates ID",
      status: "pending",
      driver_comment: ""
    },
    {
      from_location: "25.166051, 55.271847",
      to_location: "25.127795, 55.226619",
      delivery_date: "2019-05-12",
      started_at: "2019-05-12 13:06:08",
      finished_at: "",
      driver_name: "Marko Pandres",
      courier: "FastWay",
      description: "Deliver emirates ID",
      status: "started",
      driver_comment: ""
    },
    {
      from_location: "25.194594, 55.274034",
      to_location: "25.125386, 55.227821",
      delivery_date: "2019-05-25",
      started_at: "",
      finished_at: "",
      driver_name: "Adam Aldo",
      courier: "Wimo",
      description: "Deliver a souq.com shipping",
      status: "pending",
      driver_comment: ""
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('tasks', null, {});
  }
};
