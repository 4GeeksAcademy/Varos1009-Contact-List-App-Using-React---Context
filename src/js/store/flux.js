const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			slug: {
				name: "",
				phone: "",
				email: "",
				address: "",
				contactId: ''

			},
			contacts: [],
			contact: {}
		},
		actions: {

			deleteContact: async (contactId) => {

				const deleteContact = await fetch(`https://playground.4geeks.com/contact/agendas/Varos1009/contacts/${contactId}`, {
					method: 'DELETE'
				}); console.log(deleteContact.ok);
				return deleteContact.ok

			},
			saveContact: (contact) => {
				setStore({
					contact: contact
				})
			},
			updateContact: async (contact, navigate) => {
				await fetch(`https://playground.4geeks.com/contact/agendas/Varos1009/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json'
					}
				}).then(resp => {
					if (resp.ok) {
						getActions().getAgenda()
						navigate('/contact')
					}
				})

			},

			createAgenda: async () => {
				await fetch('https://playground.4geeks.com/contact/agendas/Varos1009', {
					method: 'POST'
				}).then(resp => {
					if (resp.ok) {
						getActions().getAgenda()
					} else {
						setStore({ agenda: resp })
					}
				})

			},
			getAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Varos1009')
					.then(resp => {
						console.log(resp);
						if (resp.status === 404) {
							getActions().createAgenda()
						} else {
							return resp.json();
						}

					})
					.then(resp => {
						setStore({ contacts: resp.contacts })
					})
			}
		}
	}
};


export default getState;
