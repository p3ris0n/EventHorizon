const { rpc, Transaction, xdr } = require('@stellar/stellar-sdk');
const Trigger = require('../models/trigger.model');
const axios = require('axios');
const logger = require('../config/logger');

const RPC_URL = process.env.SOROBAN_RPC_URL || 'https://soroban-testnet.stellar.org';
const server = new rpc.Server(RPC_URL);

async function pollEvents() {
    try {
        const triggers = await Trigger.find({ isActive: true });
        
        if (triggers.length === 0) {
            logger.debug('No active triggers found for polling');
            return;
        }

        logger.info('Starting event polling cycle', { 
            activeTriggers: triggers.length,
            rpcUrl: RPC_URL
        });

        for (const trigger of triggers) {
            logger.debug('Polling for trigger', {
                triggerId: trigger._id,
                eventName: trigger.eventName,
                contractId: trigger.contractId,
                isActive: trigger.isActive
            });
            
            // Logic to poll Soroban Events
            // In a real scenario, we'd use getEvents with a startLedger
            // and filter by contractId and topics.
        }
        
        logger.info('Event polling cycle completed', { 
            processedTriggers: triggers.length 
        });
    } catch (error) {
        logger.error('Error in event poller', {
            error: error.message,
            stack: error.stack,
            rpcUrl: RPC_URL
        });
    }
}

function start() {
    const pollInterval = process.env.POLL_INTERVAL_MS || 10000;
    
    logger.info('Event poller worker starting', {
        pollInterval: pollInterval,
        rpcUrl: RPC_URL
    });
    
    setInterval(pollEvents, pollInterval);
    
    logger.info('Event poller worker started successfully', {
        intervalMs: pollInterval
    });
}

module.exports = { start };
