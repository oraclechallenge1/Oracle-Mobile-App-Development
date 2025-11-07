import React from 'react';
import { View, Text } from 'react-native';

export default function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ fontSize: 12, color: '#6B7280' }}>{label}</Text>
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#0F172A' }}>{value}</Text>
    </View>
  );
}
