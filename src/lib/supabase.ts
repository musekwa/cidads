import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import * as SecureStorage from "expo-secure-store";
import * as aesjs from "aes-js";
 
class LargeSecureStore {
    private async _encrypt(key: string, value: string){
        const encryptionKey = crypto.getRandomValues(new Uint8Array(258 / 8));
        const cipher = new aesjs.ModeOfOperation.ctr(encryptionKey, new aesjs.Counter(1));
        const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
        await SecureStorage.setItemAsync(key, aesjs.utils.hex.fromBytes(encryptionKey));
        return aesjs.utils.hex.fromBytes(encryptedBytes);
    }

    private async _decrypt(key: string, value: string){
        const encryptionKeyHex = await SecureStorage.getItemAsync(key);
        if (!encryptionKeyHex){
            return encryptionKeyHex;
        }

        const cipher  = new aesjs.ModeOfOperation.ctr(aesjs.utils.hex.toBytes(encryptionKeyHex), new aesjs.Counter(1));

        const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
        
        return aesjs.utils.utf8.fromBytes(decryptedBytes);
    }

    async getItem(key: string){
        const encrypted = await AsyncStorage.getItem(key);
        if (!encrypted){
            return encrypted;
        }

        return await this._decrypt(key, encrypted)
    }

    async removeItem(key: string){
        await AsyncStorage.removeItem(key);
        await SecureStorage.deleteItemAsync(key);
    }

    async setItem(key: string, value: string){
        const encrypted = await this._encrypt(key, value);
        await AsyncStorage.setItem(key, encrypted);
    }


}


const supabaseUrl = "https://xqfbddtihpaddossiwae.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZmJkZHRpaHBhZGRvc3Npd2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxMTk5NjksImV4cCI6MjAyMjY5NTk2OX0.h-rE0QctKOB3gKOqUGG46_Q8tlAf6SyLEt43YcJ-Mys";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
})