import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import Header from '../../components/ui/Header/header';
import InfoRow from '../../components/ui/InfoRow/inforow';
import styles from './style';

import { getUserByUsername, UserProfile } from '../../services/user.service';

const PRIMARY = '#E53935';

export default function Profile() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    (async () => {
      try {
        const username = (await AsyncStorage.getItem('@ultimoUsuario')) || 'admin';
        const user = await getUserByUsername(username);
        setProfile(user);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={[styles.safe, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!profile) {
    return (
      <View style={[styles.safe, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#6B7280' }}>Usuário não encontrado.</Text>
      </View>
    );
  }

  const initials = profile.name
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <View style={styles.safe}>
      <Header />

      <View style={styles.body}>
        <View style={styles.headerCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{initials}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{profile.name}</Text>
            <Text style={styles.role}>{profile.role}</Text>
          </View>

          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => {/* futuramente: editar perfil local */}}
          >
            <Ionicons name="pencil" size={18} color={PRIMARY} />
          </TouchableOpacity>
        </View>

    
        <View style={styles.card}>
          <InfoRow label="Usuário" value={profile.username} />
          <InfoRow label="Email" value={profile.email} />
          <InfoRow label="Telefone" value={profile.phone} />
          <InfoRow label="Unidade" value={profile.unit} />
        </View>

        <View style={{ marginTop: 16, gap: 12 }}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => router.push('../MedicationList/medicationList')}
          >
            <Ionicons name="medkit-outline" size={18} color="#fff" />
            <Text style={styles.primaryBtnText}>Ver Medicamentos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.secondaryBtnText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
