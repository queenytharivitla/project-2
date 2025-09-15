const counters = {
  SBI: {
    'Cash Withdrawal': 0,
    'Deposit': 0,
    'Loan Enquiry': 0,
    'Account Opening': 0
  },
  Canara: {
    'Cash Withdrawal': 0,
    'Deposit': 0,
    'Loan Enquiry': 0,
    'Account Opening': 0
  },
  Union: {
    'Cash Withdrawal': 0,
    'Deposit': 0,
    'Loan Enquiry': 0,
    'Account Opening': 0
  }
};

const queues = {
  SBI: {
    'Cash Withdrawal': [],
    'Deposit': [],
    'Loan Enquiry': [],
    'Account Opening': []
  },
  Canara: {
    'Cash Withdrawal': [],
    'Deposit': [],
    'Loan Enquiry': [],
    'Account Opening': []
  },
  Union: {
    'Cash Withdrawal': [],
    'Deposit': [],
    'Loan Enquiry': [],
    'Account Opening': []
  }
};

const staffPass = "1234";

function joinQueue() {
  const name = document.getElementById('name').value.trim();
  const branch = document.getElementById('branch').value;
  const service = document.getElementById('service').value;

  if (!name || !branch || !service) {
    alert('Please fill all Customer fields.');
    return;
  }

  counters[branch][service]++;
  const ticketNumber = `T-${counters[branch][service]}`;
  const ticketWithName = `${ticketNumber} (${name})`;
  queues[branch][service].push(ticketWithName);

  updateQueueDisplay();
  document.getElementById('name').value = '';
}

function staffLogin() {
  const password = document.getElementById('staffPassword').value;
  if (password === staffPass) {
    document.getElementById('staffForm').style.display = 'block';
    alert('Staff Login Successful');
  } else {
    alert('Incorrect Password');
  }
}

function submitWalkin() {
  const name = document.getElementById('walkinName').value.trim();
  const branch = document.getElementById('walkinBranch').value;
  const service = document.getElementById('walkinService').value;

  if (!name || !branch || !service) {
    alert('Please fill all Walk-in fields.');
    return;
  }

  counters[branch][service]++;
  const ticketNumber = `T-${counters[branch][service]}`;
  const ticketWithName = `${ticketNumber} (${name})`;
  queues[branch][service].push(ticketWithName);

  updateQueueDisplay();
  document.getElementById('walkinName').value = '';
}

function updateQueueDisplay() {
  Object.keys(queues).forEach(branch => {
    Object.keys(queues[branch]).forEach(service => {
      const tickets = queues[branch][service];
      const element = document.getElementById(`${branch}-${service}`);
      if (element) {
        element.innerText = tickets.length > 0 ? tickets.join(', ') : 'No Tickets';
      }
    });
  });
}
