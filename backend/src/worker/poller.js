const { rpc, Transaction, xdr } = require('@stellar/stellar-sdk');
const Trigger = require('../models/trigger.model');
const axios = require('axios');

const RPC_URL = process.env.SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org';
const server = new rpc.Server(RPC_URL);

async function pollEvents() {
    try {
        const triggers = await Trigger.find({ isActive: true });
        if (triggers.length === 0) return;

        for (const trigger of triggers) {
            console.log(`🔍 Polling for: ${trigger.eventName} on ${trigger.contractId}`);
            
            // Logic to poll Soroban Events
            // In a real scenario, we'd use getEvents with a startLedger
            // and filter by contractId and topics.
        }
    } catch (error) {
        console.error('Error in poller:', error);
    }
}

function start() {
    setInterval(pollEvents, process.env.POLL_INTERVAL_MS || 10000);
    console.log('🤖 Event poller worker started');
}

module.exports = { start };
