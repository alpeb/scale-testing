import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    rps_200: {
      executor: 'constant-arrival-rate',
      rate: 200,
      preAllocatedVUs: 5000,
      duration: '10m',
    },
    rps_400: {
      startTime: '10m',
      executor: 'constant-arrival-rate',
      rate: 400,
      preAllocatedVUs: 10000,
      duration: '10m',
    },
    rps_0: {
      startTime: '20m',
      executor: 'constant-arrival-rate',
      rate: 1,
      preAllocatedVUs: 1,
      duration: '10m',
    },
  },
  thresholds: $THRESHOLDS,
};

export default function () {
  http.get('http://web-svc.emojivoto.svc.cluster.local/api/vote?choice=:ramen:');
};
