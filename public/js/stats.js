

// // let  data = JSON.stringify(stats)
// new gridjs.Grid({
//     columns:  ['Name','Team Average','position','PPG', 'RPG','APG','Blocks','Steals','FG','3Pt%','FT%','assit/to',{
//       name:'Actions',
//     formatter:(cell,row) => {
//       return h('button',{
//         className:'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
//         onClick: () => aleart(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
//       },'Edit');
//     }
//   },
// ],
//     data:  [
//         ["John", "john@example.com", "(353) 01 222 3333"],
//         ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//         ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
//         ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
//         ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
//       ]
//   }).render(document.getElementById("wrapper"))

// new gridjs.Grid({
//     columns: ["Name", "Email", "Phone Number"],
//     data: [
//       ["John", "john@example.com", "(353) 01 222 3333"],
//       ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
//       ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
//       ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
//       ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]
//     ]
//   }).render(document.getElementById("wrapper"));
// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = document.querySelector(button.dataset.modalTarget)
//     openModal(modal)
//   })
// })

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal')
//     closeModal(modal)
//   })
// })

// // function openModal(modal) {
// //   if (modal == null) return
// //   modal.classList.add('active')
// //   overlay.classList.add('active')
// // }

// // function closeModal(modal) {
//   if (modal == null) return
//   modal.classList.remove('active')
//   overlay.classList.remove('active')
// }